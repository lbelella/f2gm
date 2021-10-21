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

class ParserState(Enum):
    INIT = 1
    GET_CARTELS = 2
    GET_CARTEL_INFO = 3
    GET_CARTEL_SYSTEMS = 4
    GET_SYSTEM_PLANETS = 5

class Planet:
    def __init__(self, name, economy):
        self.name = name
        self.economy = economy

    def __repr__(self):
        return "{0}: {1}".format(self.name, self.economy)

class System:
    def __init__(self, name, owner, closed = False):
        self.name = name
        self.owner = owner
        self.closed = closed
        self.planets = []

    def add_planet(self, planet_name, economy):
        self.planets.append(Planet(planet_name, economy))

    def __repr__(self):
        return "{0}: {1}".format(self.name, self.planets)

class Cartel:
    def __init__(self, name):
        self.name = name
        self.systems = []
    
    def add_system(self, sys_name):
        self.systems.append(System(sys_name))

    def __repr__(self):
        return "{0}: {1}".format(self.name, self.systems)

class GalaxyCollector:
    def __init__(self, host, port, user, password):
        self.galaxy = {}
        self.tni = TelnetInterface(host, port, user, password, self.parse)

    def loadFromFile(self, filename):
        with open(filename, 'rb') as handle:
            self.galaxy = pickle.load(handle)

    def parseCartels(self, data):
        for l in data:
            self.galaxy[l.strip()] = {}
            #self.cartels.append(Cartel(l.strip()))

    def findSystem(self, system_name):
        syst = None

        for cartel in self.galaxy:
            if system_name in self.galaxy[cartel]:
                syst = self.galaxy[cartel][system_name]
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
                syst[planet_name] = econ

    def start2(self):
        self.state = ParserState.INIT
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
                    self.galaxy[cartel][syst.strip()] = {}

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


    def start(self):        
        self.state = ParserState.INIT
        self.cartels.clear()
        self.tni.open()
        time.sleep(3)
        self.tni.readAll()

        # Get all of the cartels
        self.tni.send(b"di cartels")
        print(self.cartels)

        # List the systems for each cartel        
        for c in self.cartels:
            self.current_cartel = c
            self.set_state(ParserState.GET_CARTEL_INFO)
            print("Getting cartel info for " + c.name)
            self.tni.send("di cartel {0}".format(c.name).encode('ascii'))

        # List the planets and owners of each system
        self.set_state(ParserState.GET_SYSTEM_PLANETS)
        self.tni.send(b"di systems")

        # We're done with the telnet connection      
        self.tni.close()

        for c in self.cartels:
            for s in c.systems:   
                if len(s.planets) == 0:
                    print("{0} is closed".format(s.name))
                    s.closed = True

        for c in self.cartels:      
            print(c.systems)

    def set_state(self, state):
        print("set_state: {0} -> {1}".format(self.state, state))
        self.state = state

    def parse(self, data):
        print(data)
        
        if self.state == ParserState.INIT:
            if "Cartels operating in this galaxy" in data:
                self.set_state(ParserState.GET_CARTELS)
        elif self.state == ParserState.GET_CARTELS:
            self.cartels.append(Cartel(data.strip()))
        elif self.state == ParserState.GET_CARTEL_INFO:
            if "Members:" in data:
                self.set_state(ParserState.GET_CARTEL_SYSTEMS)
        elif self.state == ParserState.GET_CARTEL_SYSTEMS:
            system_list_done = ["Cartel queues", "Cartel is open"]
            if any(x in data for x in system_list_done):
                self.set_state(ParserState.GET_CARTEL_INFO)
            else:
                #print("System: " + data.strip())
                if self.current_cartel:
                    self.current_cartel.add_system(data.strip())

        elif self.state == ParserState.GET_SYSTEM_PLANETS:
            '''
            There will always be an empty string at the end of this match.
            We are expecting a length of at least 5 in the resulting match.
            Number of planets = (len(list - 3) / 2)
            [0] = System name
            [1] = Owner
            [2] = Planet 1
            [3] = Planet 1 Economy
            ...
            [n - 1] = Planet x Economy
            [n] = Empty String
            '''
            matches = re.split(r'-|:|\(|\)', data)
            if len(matches) >= 5:
                sys_name = matches[0].strip()
                owner = matches[1].strip()
                num_planets = ((len(matches) - 3) / 2)
                system = None

                for c in self.cartels:
                    for s in c.systems:
                        if sys_name == s.name:
                            system = s

                if system:                    
                    for i in range(2, len(matches) - 1, 2):
                        p_name = matches[i].strip()
                        p_econ = matches[i + 1].strip()
                        system.add_planet(p_name, p_econ)

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
    gp.buildOutput('index.html')

if __name__ == "__main__":
    main()