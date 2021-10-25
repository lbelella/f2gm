const elements = [
          { data: { id: 'ISL', label: 'ISL', fedType: 'ISL', level: 4 }, group: 'nodes' },
          { data: { id: 'Aero', label: 'Aero', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Odd', label: 'Odd', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Red', label: 'Red', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Pastry', label: 'Pastry', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Light', label: 'Light', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Aevum', label: 'Aevum', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Vitis', label: 'Vitis', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Clockwork', label: 'Clockwork', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Cobalt', label: 'Cobalt', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Four', label: 'Four', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Grok', label: 'Grok', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Aqua', label: 'Aqua', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Amber', label: 'Amber', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Anise', label: 'Anise', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Absurd', label: 'Absurd', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Indigo', label: 'Indigo', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Barovia', label: 'Barovia', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Easy', label: 'Easy', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Bfmc', label: 'Bfmc', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Nor', label: 'Nor', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Gan', label: 'Gan', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Hip', label: 'Hip', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Whiskey', label: 'Whiskey', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Max', label: 'Max', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Force', label: 'Force', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Pub', label: 'Pub', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Radio', label: 'Radio', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Doom', label: 'Doom', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Kiv', label: 'Kiv', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Swing', label: 'Swing', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Bikers', label: 'Bikers', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Engine', label: 'Engine', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Bikes', label: 'Bikes', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Borks', label: 'Borks', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Danville', label: 'Danville', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Villain', label: 'Villain', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Effvee', label: 'Effvee', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Reedy Creek', label: 'Reedy Creek', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Litwak', label: 'Litwak', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Grounds', label: 'Grounds', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Imperium', label: 'Imperium', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Westeros', label: 'Westeros', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Deadwood', label: 'Deadwood', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Travels', label: 'Travels', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Clowns', label: 'Clowns', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Discovery', label: 'Discovery', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Flight', label: 'Flight', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Enso', label: 'Enso', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'The Star Galaxy', label: 'The Star Galaxy', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Trial', label: 'Trial', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Abyss', label: 'Abyss', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Outpost', label: 'Outpost', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Flowers', label: 'Flowers', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Theater', label: 'Theater', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Wyld', label: 'Wyld', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Gov', label: 'Gov', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Alehouse', label: 'Alehouse', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Roman Empire', label: 'Roman Empire', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Tribe', label: 'Tribe', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Justified', label: 'Justified', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Frontier', label: 'Frontier', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Vacation', label: 'Vacation', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Warlord', label: 'Warlord', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Jukebox', label: 'Jukebox', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Hof', label: 'Hof', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Volleyball', label: 'Volleyball', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Crouton', label: 'Crouton', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Razor', label: 'Razor', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Meadows', label: 'Meadows', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Escape', label: 'Escape', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Seer', label: 'Seer', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Disco', label: 'Disco', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Redpill', label: 'Redpill', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Number', label: 'Number', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Wow', label: 'Wow', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Punctual', label: 'Punctual', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Class', label: 'Class', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Zork', label: 'Zork', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Sting', label: 'Sting', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Rounders', label: 'Rounders', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Alient', label: 'Alient', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Whodunit', label: 'Whodunit', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Soiree', label: 'Soiree', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Null', label: 'Null', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Types', label: 'Types', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Metric', label: 'Metric', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Underdark', label: 'Underdark', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Rage', label: 'Rage', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Hope', label: 'Hope', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Despair', label: 'Despair', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Ombey', label: 'Ombey', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Prefix', label: 'Prefix', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Politics', label: 'Politics', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Abstract', label: 'Abstract', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Mud', label: 'Mud', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Kizam', label: 'Kizam', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Pacifica', label: 'Pacifica', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Pyra', label: 'Pyra', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Even', label: 'Even', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Toast', label: 'Toast', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Heck', label: 'Heck', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Luster', label: 'Luster', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Sidh', label: 'Sidh', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Picts', label: 'Picts', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Rionnag', label: 'Rionnag', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Acorn', label: 'Acorn', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Sol', label: 'Sol', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Carib', label: 'Carib', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Fight', label: 'Fight', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Ellan Vannin', label: 'Ellan Vannin', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Rihansu', label: 'Rihansu', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Everworld', label: 'Everworld', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Mythic', label: 'Mythic', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Strat', label: 'Strat', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Deep', label: 'Deep', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Top40', label: 'Top40', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Overcast', label: 'Overcast', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Paradox', label: 'Paradox', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Time', label: 'Time', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Terra', label: 'Terra', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Snack', label: 'Snack', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Spice', label: 'Spice', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Caffeine', label: 'Caffeine', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Night', label: 'Night', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Tinkle', label: 'Tinkle', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Supernova', label: 'Supernova', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Stellar', label: 'Stellar', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Badlands', label: 'Badlands', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Topology', label: 'Topology', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Kio Nebula', label: 'Kio Nebula', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'Travel', label: 'Travel', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Waveform', label: 'Waveform', fedType: 'CARTEL', level: 3 }, group: 'nodes' },
          { data: { id: 'Vee', label: 'Vee', fedType: 'SYSTEM', econ: '$econ', level: 2 }, group: 'nodes' },
          { data: { id: 'ISLAero', source: 'ISL', target: 'Aero' }, group: 'edges' },
          { data: { id: 'AeroOdd', source: 'Aero', target: 'Odd' }, group: 'edges' },
          { data: { id: 'AeroRed', source: 'Aero', target: 'Red' }, group: 'edges' },
          { data: { id: 'AeroPastry', source: 'Aero', target: 'Pastry' }, group: 'edges' },
          { data: { id: 'AeroLight', source: 'Aero', target: 'Light' }, group: 'edges' },
          { data: { id: 'ISLAevum', source: 'ISL', target: 'Aevum' }, group: 'edges' },
          { data: { id: 'AevumVitis', source: 'Aevum', target: 'Vitis' }, group: 'edges' },
          { data: { id: 'AevumClockwork', source: 'Aevum', target: 'Clockwork' }, group: 'edges' },
          { data: { id: 'AevumCobalt', source: 'Aevum', target: 'Cobalt' }, group: 'edges' },
          { data: { id: 'AevumFour', source: 'Aevum', target: 'Four' }, group: 'edges' },
          { data: { id: 'AevumGrok', source: 'Aevum', target: 'Grok' }, group: 'edges' },
          { data: { id: 'ISLAqua', source: 'ISL', target: 'Aqua' }, group: 'edges' },
          { data: { id: 'AquaAmber', source: 'Aqua', target: 'Amber' }, group: 'edges' },
          { data: { id: 'AquaAnise', source: 'Aqua', target: 'Anise' }, group: 'edges' },
          { data: { id: 'AquaAbsurd', source: 'Aqua', target: 'Absurd' }, group: 'edges' },
          { data: { id: 'AquaIndigo', source: 'Aqua', target: 'Indigo' }, group: 'edges' },
          { data: { id: 'ISLBarovia', source: 'ISL', target: 'Barovia' }, group: 'edges' },
          { data: { id: 'BaroviaEasy', source: 'Barovia', target: 'Easy' }, group: 'edges' },
          { data: { id: 'ISLBfmc', source: 'ISL', target: 'Bfmc' }, group: 'edges' },
          { data: { id: 'BfmcNor', source: 'Bfmc', target: 'Nor' }, group: 'edges' },
          { data: { id: 'BfmcGan', source: 'Bfmc', target: 'Gan' }, group: 'edges' },
          { data: { id: 'BfmcHip', source: 'Bfmc', target: 'Hip' }, group: 'edges' },
          { data: { id: 'BfmcWhiskey', source: 'Bfmc', target: 'Whiskey' }, group: 'edges' },
          { data: { id: 'BfmcMax', source: 'Bfmc', target: 'Max' }, group: 'edges' },
          { data: { id: 'BfmcForce', source: 'Bfmc', target: 'Force' }, group: 'edges' },
          { data: { id: 'BfmcPub', source: 'Bfmc', target: 'Pub' }, group: 'edges' },
          { data: { id: 'BfmcRadio', source: 'Bfmc', target: 'Radio' }, group: 'edges' },
          { data: { id: 'BfmcDoom', source: 'Bfmc', target: 'Doom' }, group: 'edges' },
          { data: { id: 'BfmcKiv', source: 'Bfmc', target: 'Kiv' }, group: 'edges' },
          { data: { id: 'BfmcSwing', source: 'Bfmc', target: 'Swing' }, group: 'edges' },
          { data: { id: 'BfmcBikers', source: 'Bfmc', target: 'Bikers' }, group: 'edges' },
          { data: { id: 'BfmcEngine', source: 'Bfmc', target: 'Engine' }, group: 'edges' },
          { data: { id: 'ISLBikes', source: 'ISL', target: 'Bikes' }, group: 'edges' },
          { data: { id: 'ISLBorks', source: 'ISL', target: 'Borks' }, group: 'edges' },
          { data: { id: 'ISLDanville', source: 'ISL', target: 'Danville' }, group: 'edges' },
          { data: { id: 'DanvilleVillain', source: 'Danville', target: 'Villain' }, group: 'edges' },
          { data: { id: 'DanvilleEffvee', source: 'Danville', target: 'Effvee' }, group: 'edges' },
          { data: { id: 'DanvilleReedy Creek', source: 'Danville', target: 'Reedy Creek' }, group: 'edges' },
          { data: { id: 'DanvilleLitwak', source: 'Danville', target: 'Litwak' }, group: 'edges' },
          { data: { id: 'DanvilleGrounds', source: 'Danville', target: 'Grounds' }, group: 'edges' },
          { data: { id: 'DanvilleImperium', source: 'Danville', target: 'Imperium' }, group: 'edges' },
          { data: { id: 'DanvilleWesteros', source: 'Danville', target: 'Westeros' }, group: 'edges' },
          { data: { id: 'ISLDeadwood', source: 'ISL', target: 'Deadwood' }, group: 'edges' },
          { data: { id: 'DeadwoodTravels', source: 'Deadwood', target: 'Travels' }, group: 'edges' },
          { data: { id: 'DeadwoodClowns', source: 'Deadwood', target: 'Clowns' }, group: 'edges' },
          { data: { id: 'ISLDiscovery', source: 'ISL', target: 'Discovery' }, group: 'edges' },
          { data: { id: 'ISLFlight', source: 'ISL', target: 'Flight' }, group: 'edges' },
          { data: { id: 'FlightEnso', source: 'Flight', target: 'Enso' }, group: 'edges' },
          { data: { id: 'FlightThe Star Galaxy', source: 'Flight', target: 'The Star Galaxy' }, group: 'edges' },
          { data: { id: 'FlightTrial', source: 'Flight', target: 'Trial' }, group: 'edges' },
          { data: { id: 'FlightAbyss', source: 'Flight', target: 'Abyss' }, group: 'edges' },
          { data: { id: 'FlightOutpost', source: 'Flight', target: 'Outpost' }, group: 'edges' },
          { data: { id: 'FlightFlowers', source: 'Flight', target: 'Flowers' }, group: 'edges' },
          { data: { id: 'FlightTheater', source: 'Flight', target: 'Theater' }, group: 'edges' },
          { data: { id: 'FlightWyld', source: 'Flight', target: 'Wyld' }, group: 'edges' },
          { data: { id: 'FlightGov', source: 'Flight', target: 'Gov' }, group: 'edges' },
          { data: { id: 'FlightAlehouse', source: 'Flight', target: 'Alehouse' }, group: 'edges' },
          { data: { id: 'FlightRoman Empire', source: 'Flight', target: 'Roman Empire' }, group: 'edges' },
          { data: { id: 'FlightTribe', source: 'Flight', target: 'Tribe' }, group: 'edges' },
          { data: { id: 'FlightJustified', source: 'Flight', target: 'Justified' }, group: 'edges' },
          { data: { id: 'ISLFrontier', source: 'ISL', target: 'Frontier' }, group: 'edges' },
          { data: { id: 'FrontierVacation', source: 'Frontier', target: 'Vacation' }, group: 'edges' },
          { data: { id: 'FrontierWarlord', source: 'Frontier', target: 'Warlord' }, group: 'edges' },
          { data: { id: 'ISLJukebox', source: 'ISL', target: 'Jukebox' }, group: 'edges' },
          { data: { id: 'JukeboxHof', source: 'Jukebox', target: 'Hof' }, group: 'edges' },
          { data: { id: 'JukeboxVolleyball', source: 'Jukebox', target: 'Volleyball' }, group: 'edges' },
          { data: { id: 'JukeboxCrouton', source: 'Jukebox', target: 'Crouton' }, group: 'edges' },
          { data: { id: 'JukeboxRazor', source: 'Jukebox', target: 'Razor' }, group: 'edges' },
          { data: { id: 'ISLMeadows', source: 'ISL', target: 'Meadows' }, group: 'edges' },
          { data: { id: 'MeadowsEscape', source: 'Meadows', target: 'Escape' }, group: 'edges' },
          { data: { id: 'MeadowsSeer', source: 'Meadows', target: 'Seer' }, group: 'edges' },
          { data: { id: 'MeadowsDisco', source: 'Meadows', target: 'Disco' }, group: 'edges' },
          { data: { id: 'MeadowsRedpill', source: 'Meadows', target: 'Redpill' }, group: 'edges' },
          { data: { id: 'MeadowsNumber', source: 'Meadows', target: 'Number' }, group: 'edges' },
          { data: { id: 'MeadowsWow', source: 'Meadows', target: 'Wow' }, group: 'edges' },
          { data: { id: 'MeadowsPunctual', source: 'Meadows', target: 'Punctual' }, group: 'edges' },
          { data: { id: 'MeadowsClass', source: 'Meadows', target: 'Class' }, group: 'edges' },
          { data: { id: 'MeadowsZork', source: 'Meadows', target: 'Zork' }, group: 'edges' },
          { data: { id: 'MeadowsSting', source: 'Meadows', target: 'Sting' }, group: 'edges' },
          { data: { id: 'MeadowsRounders', source: 'Meadows', target: 'Rounders' }, group: 'edges' },
          { data: { id: 'MeadowsAlient', source: 'Meadows', target: 'Alient' }, group: 'edges' },
          { data: { id: 'MeadowsWhodunit', source: 'Meadows', target: 'Whodunit' }, group: 'edges' },
          { data: { id: 'MeadowsSoiree', source: 'Meadows', target: 'Soiree' }, group: 'edges' },
          { data: { id: 'ISLNull', source: 'ISL', target: 'Null' }, group: 'edges' },
          { data: { id: 'NullTypes', source: 'Null', target: 'Types' }, group: 'edges' },
          { data: { id: 'NullMetric', source: 'Null', target: 'Metric' }, group: 'edges' },
          { data: { id: 'NullUnderdark', source: 'Null', target: 'Underdark' }, group: 'edges' },
          { data: { id: 'NullRage', source: 'Null', target: 'Rage' }, group: 'edges' },
          { data: { id: 'NullHope', source: 'Null', target: 'Hope' }, group: 'edges' },
          { data: { id: 'NullDespair', source: 'Null', target: 'Despair' }, group: 'edges' },
          { data: { id: 'NullOmbey', source: 'Null', target: 'Ombey' }, group: 'edges' },
          { data: { id: 'NullPrefix', source: 'Null', target: 'Prefix' }, group: 'edges' },
          { data: { id: 'NullPolitics', source: 'Null', target: 'Politics' }, group: 'edges' },
          { data: { id: 'NullAbstract', source: 'Null', target: 'Abstract' }, group: 'edges' },
          { data: { id: 'NullMud', source: 'Null', target: 'Mud' }, group: 'edges' },
          { data: { id: 'NullKizam', source: 'Null', target: 'Kizam' }, group: 'edges' },
          { data: { id: 'ISLPacifica', source: 'ISL', target: 'Pacifica' }, group: 'edges' },
          { data: { id: 'ISLPyra', source: 'ISL', target: 'Pyra' }, group: 'edges' },
          { data: { id: 'PyraEven', source: 'Pyra', target: 'Even' }, group: 'edges' },
          { data: { id: 'PyraToast', source: 'Pyra', target: 'Toast' }, group: 'edges' },
          { data: { id: 'PyraHeck', source: 'Pyra', target: 'Heck' }, group: 'edges' },
          { data: { id: 'PyraLuster', source: 'Pyra', target: 'Luster' }, group: 'edges' },
          { data: { id: 'ISLSidh', source: 'ISL', target: 'Sidh' }, group: 'edges' },
          { data: { id: 'SidhPicts', source: 'Sidh', target: 'Picts' }, group: 'edges' },
          { data: { id: 'SidhRionnag', source: 'Sidh', target: 'Rionnag' }, group: 'edges' },
          { data: { id: 'SidhAcorn', source: 'Sidh', target: 'Acorn' }, group: 'edges' },
          { data: { id: 'ISLSol', source: 'ISL', target: 'Sol' }, group: 'edges' },
          { data: { id: 'SolCarib', source: 'Sol', target: 'Carib' }, group: 'edges' },
          { data: { id: 'SolFight', source: 'Sol', target: 'Fight' }, group: 'edges' },
          { data: { id: 'SolEllan Vannin', source: 'Sol', target: 'Ellan Vannin' }, group: 'edges' },
          { data: { id: 'SolRihansu', source: 'Sol', target: 'Rihansu' }, group: 'edges' },
          { data: { id: 'SolEverworld', source: 'Sol', target: 'Everworld' }, group: 'edges' },
          { data: { id: 'SolMythic', source: 'Sol', target: 'Mythic' }, group: 'edges' },
          { data: { id: 'ISLStrat', source: 'ISL', target: 'Strat' }, group: 'edges' },
          { data: { id: 'StratDeep', source: 'Strat', target: 'Deep' }, group: 'edges' },
          { data: { id: 'StratTop40', source: 'Strat', target: 'Top40' }, group: 'edges' },
          { data: { id: 'StratOvercast', source: 'Strat', target: 'Overcast' }, group: 'edges' },
          { data: { id: 'StratParadox', source: 'Strat', target: 'Paradox' }, group: 'edges' },
          { data: { id: 'StratTime', source: 'Strat', target: 'Time' }, group: 'edges' },
          { data: { id: 'ISLTerra', source: 'ISL', target: 'Terra' }, group: 'edges' },
          { data: { id: 'TerraSnack', source: 'Terra', target: 'Snack' }, group: 'edges' },
          { data: { id: 'TerraSpice', source: 'Terra', target: 'Spice' }, group: 'edges' },
          { data: { id: 'TerraCaffeine', source: 'Terra', target: 'Caffeine' }, group: 'edges' },
          { data: { id: 'TerraNight', source: 'Terra', target: 'Night' }, group: 'edges' },
          { data: { id: 'ISLTinkle', source: 'ISL', target: 'Tinkle' }, group: 'edges' },
          { data: { id: 'TinkleSupernova', source: 'Tinkle', target: 'Supernova' }, group: 'edges' },
          { data: { id: 'TinkleStellar', source: 'Tinkle', target: 'Stellar' }, group: 'edges' },
          { data: { id: 'TinkleBadlands', source: 'Tinkle', target: 'Badlands' }, group: 'edges' },
          { data: { id: 'ISLTopology', source: 'ISL', target: 'Topology' }, group: 'edges' },
          { data: { id: 'TopologyKio Nebula', source: 'Topology', target: 'Kio Nebula' }, group: 'edges' },
          { data: { id: 'ISLTravel', source: 'ISL', target: 'Travel' }, group: 'edges' },
          { data: { id: 'ISLWaveform', source: 'ISL', target: 'Waveform' }, group: 'edges' },
          { data: { id: 'WaveformVee', source: 'Waveform', target: 'Vee' }, group: 'edges' },
];
export default elements;