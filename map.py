#!/usr/bin/python3

import getpass
from os import system
import telnetlib
import re
import configparser
from enum import Enum

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
    def __init__(self, name, closed = False):
        self.name = name
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
        self.cartels = []        
        self.state = ParserState.GET_CARTELS
        self.tni = TelnetInterface(host, port, user, password, self.parse)
        self.current_cartel = None

    def start(self):        
        self.state = ParserState.INIT
        self.cartels.clear()
        self.tni.open()

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

class TelnetInterface:
    def __init__(self, host, port, user, password, callback):
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.callback = callback

    def open(self):        
        self.tn = telnetlib.Telnet(self.host, self.port)
        self.tn.read_until(b"Login:")
        self.tn.write(self.user.encode('ascii') + b"\n")
        self.tn.read_until(b"Password:")
        self.tn.write(self.password.encode('ascii') + b"\n")
        print("Connected...")

    def close(self):
        print("Closing...")
        self.send(b"quit")
        self.tn.close()

    def send(self, data):
        self.tn.write(data + b"\n")

        try:
            rx_data = self.tn.read_until(b"\n", 1)

            while(len(rx_data) > 0):
                self.callback(rx_data.decode('ascii').replace("\n", ""))                    
                rx_data = self.tn.read_until(b"\n", 1)
        except EOFError:
            pass

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
    gc.start()

if __name__ == "__main__":
    main()