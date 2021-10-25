#!/usr/bin/python3
import pickle
import pprint

with open('galaxy.pickle', 'rb') as handle:
	b = pickle.load(handle)

pp = pprint.PrettyPrinter()
pp.pprint(b)
