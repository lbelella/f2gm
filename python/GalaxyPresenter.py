from os import confstr
from string import Template

ISL = "          { data: { id: 'ISL', label: 'ISL', fedType: 'ISL', level: 4 }, group: 'nodes' },\n"
CARTEL_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', level: $level }, group: 'nodes' },\n"
SYSTEM_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', level: $level, cartel: '$cartel' }, group: 'nodes' },\n"
PLANET_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', econ: '$econ', level: $level, cartel: '$cartel', system: '$system' }, group: 'nodes' },\n"
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
        cyto_data += ISL
        
        for cartel in self.galaxy:
            s = Template(CARTEL_TEMPLATE)
            cyto_data += s.safe_substitute(id=self.galaxy[cartel]['id'], label=cartel, fed_type='CARTEL', level='3')

            for system in self.galaxy[cartel]['systems']:
                syst = self.galaxy[cartel]['systems'][system]
                for planet in syst['planets']:
                    plt = syst['planets'][planet]
                    print(plt)
                    s = Template(PLANET_TEMPLATE)
                    cyto_data += s.safe_substitute(
                        id=plt['id'], 
                        label=planet, 
                        fed_type='PLANET', 
                        econ=plt['econ'], 
                        level='1',
                        cartel=cartel,
                        system=system)

                if system == cartel:
                    continue

                s = Template(SYSTEM_TEMPLATE)
                cyto_data += s.safe_substitute(id=syst['id'], label=system, fed_type='SYSTEM', level='2', cartel=cartel)

        for cartel in self.galaxy:
            crt = self.galaxy[cartel]
            s = Template(CARTEL_LINK_TEMPLATE)
            cyto_data += s.safe_substitute(id='ISL{0}'.format(cartel), src='ISL', tgt=crt['id'])

            for system in self.galaxy[cartel]['systems']:
                syst = self.galaxy[cartel]['systems'][system]
                sys_id = syst['id']

                if system != cartel:
                    cyto_data += s.safe_substitute(id='cs_{0}_{1}'.format(crt['id'], syst['id']), src=crt['id'], tgt=syst['id'])
                else:
                    sys_id = crt['id']

                for planet in syst['planets']:
                    plt = syst['planets'][planet]
                    cyto_data += s.safe_substitute(id='sp_{0}_{1}'.format(sys_id, plt['id']), src=sys_id, tgt=plt['id'])


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