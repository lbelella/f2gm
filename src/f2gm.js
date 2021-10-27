import style from './style.js';
import elements from './elements.js';
import cytoscape from 'cytoscape';
//import cise from 'cytoscape-cise';
//import fcose from 'cytoscape-fcose';
//import cola from 'cytoscape-cola';
//import elk from 'cytoscape-elk';

//cytoscape.use( cise );
//cytoscape.use( fcose );
//cytoscape.use( cola );
//cytoscape.use( elk );

var cy = cytoscape({
    container: document.getElementById('gm'),
    style: style,
    elements: elements,

    /*
    layout: { 
        name: 'concentric',
        concentric: function( node ){
            return node.data('level');
        },
        levelWidth: function ( nodes ){
            return 1;
        }
    }
    */
});

const all_eles = cy.elements();
all_eles.addClass('hidden');

var galaxy_center = cy.elements('node#ISL, edge[source = "ISL"]');
galaxy_center = galaxy_center.union(cy.elements('[level >= 3]'));
galaxy_center.removeClass('hidden');
console.log(galaxy_center);

var layout = galaxy_center.layout({
    name: 'concentric',
        concentric: function( node ){
            return node.data('level');
        },
        levelWidth: function ( nodes ){
            return 1;
        }
});

layout.run();

var cartels = cy.elements('node[fedType = "CARTEL"]');

for (const ele of cartels) {
    //var system_eles = cartels.elements('node#', );
    console.log(ele);
}
