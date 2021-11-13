#!/usr/bin/python3

from os import system
import re
import configparser
from enum import Enum
import time
import pickle
from TelnetInterface import TelnetInterface
from GalaxyPresenter import GalaxyPresenter

CMD_END = "I'm sorry I don't understand you. Can you put that a different way?"

CARTEL_QUEUES = "Cartel queues"
CARTEL_OPEN = "Cartel is open"
CARTEL_CLOSED = "Cartel is not"

PARSE_CARTELS_TRIGGER = "Cartels operating in this galaxy"
PARSE_CARTEL_SYSTEMS_TRIGGER = "Members:"

TEST_PARSE = 1

class GalaxyCollector:
    def __init__(self, host, port, user, password):
        self.galaxy = {}
        self.tni = TelnetInterface(host, port, user, password, None)

        # Save room so if a presenter wants, the ISL link can be ID 0
        self.entity_id = 1

    def getNextId(self):
        retval = self.entity_id
        self.entity_id += 1
        return retval

    def loadFromFile(self, filename):
        with open(filename, 'rb') as handle:
            self.galaxy = pickle.load(handle)

    def parseCartels(self, data):
        for l in data:
            self.galaxy[l.strip()] = {'id': self.getNextId(), 'systems': {}}
            #self.cartels.append(Cartel(l.strip()))

    def findSystem(self, system_name):
        syst = None

        for cartel in self.galaxy:
            if system_name in self.galaxy[cartel]['systems']:
                syst = self.galaxy[cartel]['systems'][system_name]
                break

        return syst

    # Waveform - Starchaser: Pulse(B) Saw(L) Sine(B) Square(R) Triangle(A)
    def parseSystems(self, data):
        for system in data:
            tokens = re.split(':|-', system)
            system_name = tokens[0].strip()
            #system_owner = tokens[1].strip()
            planet_str = tokens[2].strip()
            planets = re.findall(r'(.*?\(.\))', planet_str)

            syst = self.findSystem(system_name)

            if syst is None:
                raise KeyError(system_name)
                        
            for p in planets:
                tokens = re.split('\(|\)', p)
                planet_name = tokens[0].strip()
                econ = tokens[1].strip()
                syst['planets'][planet_name] = {'econ': econ, 'id': self.getNextId()}

    def start2(self):
        self.tni.open()

        try:
            # Get all of the cartels
            print('Getting cartel list ...')
            cartel_data = self.tni.sendGetLinesWithTrigger(b"di cartels", PARSE_CARTELS_TRIGGER)
            print('Parsing cartel list...')
            self.parseCartels(cartel_data)

            # Get all of the systems in each cartel        
            for cartel in self.galaxy:
                print('\n\nGetting systems in the {0} cartel...'.format(cartel))
                cartel_members = self.tni.sendGetLinesWithTrigger('di cartel {0}'.format(cartel).encode('ascii'), PARSE_CARTEL_SYSTEMS_TRIGGER)
                for syst in cartel_members:
                    if CARTEL_OPEN in syst or CARTEL_QUEUES in syst or CARTEL_CLOSED in syst:
                        break
                    print('Adding the {0} system to the {1} cartel...'.format(syst.strip(), cartel))
                    self.galaxy[cartel]['systems'][syst.strip()] = {'id': self.getNextId(), 'planets': {}}

            # Pull all of the systems via DI SYSTEMS then associate systems to cartels from above
            print('\nGetting galatic system data...')
            system_data = self.tni.sendGetLines(b"di systems")
            print('Parsing system data...')
            self.parseSystems(system_data)
            print('Data collection complete!')
            print(self.galaxy)
        finally:
            # We're done with the telnet connection      
            self.tni.close()

            with open('galaxy.pickle', 'wb') as handle:
                pickle.dump(self.galaxy, handle)

def main():
    cp = configparser.ConfigParser()
    cp.read('config.ini')
    config = cp['CONFIG']

    host = config.get('host')
    port = config.get('port')
    user = config.get('user')
    password = config.get('pass')

    print("Connecting {0} to {1}:{2}".format(user, host, port))

    gc = GalaxyCollector(host, port, user, password)
    gp = GalaxyPresenter()

    if TEST_PARSE:
        gc.loadFromFile('galaxy.pickle')
    else:
        gc.start2()

    gp.load(gc.galaxy)
    gp.buildOutput('../dist/index.html')

if __name__ == "__main__":
    main()