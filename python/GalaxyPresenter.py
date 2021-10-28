from os import confstr
from string import Template


ISL = "          { data: { id: 'ISL', label: 'ISL', fedType: 'ISL', innerLevel: 3 }, group: 'nodes' },\n"
CARTEL_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', innerLevel: $inner_level }, group: 'nodes' },\n"
SYSTEM_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', innerLevel: $inner_level, outerLevel: $outer_level, cartel: '$cartel' }, group: 'nodes' },\n"
PLANET_TEMPLATE = "          { data: { id: '$id', label: '$label', fedType: '$fed_type', econ: '$econ', outerLevel: $outer_level, cartel: '$cartel', system: '$system', parent: '$parent' }, group: 'nodes' },\n"
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
        #cyto_data += ISL
        
        for cartel in self.galaxy:
            #s = Template(CARTEL_TEMPLATE)
            #cyto_data += s.safe_substitute(id=self.galaxy[cartel]['id'], label=cartel, fed_type='CARTEL', inner_level='2')

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
                        outer_level='1',
                        cartel=cartel,
                        system=system,
                        parent=syst['id'])

                ft = 'SYSTEM'
                inner_lvl = '1'
                outer_lvl = '1'

                if system == cartel:
                    ft = 'CARTELSYSTEM'
                    inner_lvl = '1'
                    outer_lvl = '2'

                s = Template(SYSTEM_TEMPLATE)
                cyto_data += s.safe_substitute(id=syst['id'], label=system, fed_type=ft, inner_level=inner_lvl, outer_level=outer_lvl, cartel=cartel)

        for cartel in self.galaxy:
            #crt = self.galaxy[cartel]
            s = Template(CARTEL_LINK_TEMPLATE)
            #cyto_data += s.safe_substitute(id='ISL{0}'.format(cartel), src='ISL', tgt=crt['id'])

            cs_id = None

            for system in self.galaxy[cartel]['systems']:
                if system == cartel:
                    cs_id = self.galaxy[cartel]['systems'][system]['id']
                    break

            for system in self.galaxy[cartel]['systems']:
                syst = self.galaxy[cartel]['systems'][system]
                sys_id = syst['id']

                if system != cartel:                    
                    cyto_data += s.safe_substitute(id='cs_{0}_{1}'.format(cs_id, sys_id), src=cs_id, tgt=sys_id)


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