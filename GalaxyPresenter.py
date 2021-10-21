from os import confstr
from string import Template

ISL = "          {data:{id:'ISL'}},\n"
CARTEL_TEMPLATE = "          {data:{id:'$id',label:'$label'}},\n"
CARTEL_LINK_TEMPLATE = "          {data:{id:'$id',source:'$src',target:'$tgt'}},\n"

class GalaxyPresenter:
    def __init__(self):
        self.galaxy = None

    def load(self, galaxy_dict):
        self.galaxy = galaxy_dict        

    def buildOutput(self, output_filename):
        cyto_data = ISL
        
        for cartel in self.galaxy:
            s = Template(CARTEL_TEMPLATE)
            cyto_data += s.safe_substitute(id=cartel,label=cartel)

            for system in self.galaxy[cartel]:
                for planet in self.galaxy[cartel][system]:
                    cyto_data += s.safe_substitute(id='{0}Planet{1}'.format(system, planet),label=planet)

                if system == cartel:
                    continue

                cyto_data += s.safe_substitute(id=system,label=system)

        for cartel in self.galaxy:
            s = Template(CARTEL_LINK_TEMPLATE)
            cyto_data += s.safe_substitute(id='ISL{0}'.format(cartel), src='ISL', tgt=cartel)

            for system in self.galaxy[cartel]:
                if system == cartel:
                    for planet in self.galaxy[cartel][system]:
                        cyto_data += s.safe_substitute(id='Link{0}Planet{1}'.format(system, planet),src=system, tgt='{0}Planet{1}'.format(system, planet))
                else:
                    cyto_data += s.safe_substitute(id='{0}{1}'.format(cartel, system), src=cartel, tgt=system)
                    for planet in self.galaxy[cartel][system]:
                        cyto_data += s.safe_substitute(id='Link{0}Planet{1}'.format(system, planet),src=system, tgt='{0}Planet{1}'.format(system, planet))

        
        print(cyto_data)

        template_str = None

        with open('index.html.tpl', 'r') as template:
            template_str = template.read()
        
        s = Template(template_str)
        outdata = s.safe_substitute(CYTO_DATA=cyto_data)        

        with open(output_filename, 'w') as outfile:
            outfile.write(outdata)