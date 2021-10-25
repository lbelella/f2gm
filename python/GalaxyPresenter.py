from os import confstr
from string import Template

ISL = "          { data: { id: 'ISL', label: 'ISL', fedType: 'ISL', level: 4 }, group: 'nodes' },\n"
CARTEL_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', level: $level }, group: 'nodes' },\n"
PLANET_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', econ: '$econ', level: $level }, group: 'nodes' },\n"
CARTEL_LINK_TEMPLATE = "          { data: { id: '$id', source: '$src', target: '$tgt' }, group: 'edges' },\n"

HTML_TEMPLATE = './html_templates/index.html.tpl'
ELEMENTS_OUTFILE = '../src/elements.js'

class GalaxyPresenter:
    def __init__(self):
        self.galaxy = None

    def load(self, galaxy_dict):
        self.galaxy = galaxy_dict        

    def buildOutput(self, output_filename):
        cyto_data = 'const elements = [\n'
        #cyto_data += '"nodes": [\n'
        #cyto_data += '[\n'
        cyto_data += ISL
        
        for cartel in self.galaxy:
            s = Template(CARTEL_TEMPLATE)
            cyto_data += s.safe_substitute(id=cartel, label=cartel, fed_type='CARTEL', level='3')

            for system in self.galaxy[cartel]:
                for planet in self.galaxy[cartel][system]:
                    s = Template(PLANET_TEMPLATE)
                    cyto_data += s.safe_substitute(id='{0}Planet{1}'.format(system, planet), label=planet, fed_type='PLANET', econ=self.galaxy[cartel][system][planet], level='1')
                    #pass

                if system == cartel:
                    continue

                cyto_data += s.safe_substitute(id=system, label=system, fed_type='SYSTEM', level='2')

        #cyto_data += '],'
        #cyto_data += '"edges": [\n'

        for cartel in self.galaxy:
            s = Template(CARTEL_LINK_TEMPLATE)
            cyto_data += s.safe_substitute(id='ISL{0}'.format(cartel), src='ISL', tgt=cartel)

            for system in self.galaxy[cartel]:
                if system == cartel:
                    for planet in self.galaxy[cartel][system]:
                        cyto_data += s.safe_substitute(id='Link{0}Planet{1}'.format(system, planet),src=system, tgt='{0}Planet{1}'.format(system, planet))
                        #pass
                else:
                    cyto_data += s.safe_substitute(id='{0}{1}'.format(cartel, system), src=cartel, tgt=system)
                    for planet in self.galaxy[cartel][system]:
                        cyto_data += s.safe_substitute(id='Link{0}Planet{1}'.format(system, planet),src=system, tgt='{0}Planet{1}'.format(system, planet))
                        #pass

        cyto_data += '];\n'
        cyto_data += 'export default elements;'

        print(cyto_data)

        with open(ELEMENTS_OUTFILE, 'w') as outfile:
            outfile.write(cyto_data)

        template_str = None

        with open(HTML_TEMPLATE, 'r') as template:
            template_str = template.read()
        
        #s = Template(template_str)
        #outdata = s.safe_substitute(CYTO_DATA=cyto_data)        

        with open(output_filename, 'w') as outfile:
            outfile.write(template_str)