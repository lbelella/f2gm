import style from './style.js';
import elements from './elements.js';
import cytoscape from 'cytoscape';
//import cise from 'cytoscape-cise';
import fcose from 'cytoscape-fcose';
//import cola from 'cytoscape-cola';

//cytoscape.use( cise );
cytoscape.use( fcose );
//ytoscape.use( cola );

var cy = cytoscape({
    container: document.getElementById('gm'),
    style: style,
    elements: elements
});

var layout = cy.layout({
    name: 'fcose'
});

layout.run();

/*
const all_eles = cy.elements();
all_eles.addClass('hidden');

var isl = cy.$('node#ISL');
var galaxy_center = cy.elements('node#ISL, node[fedType = "CARTEL"], node[fedType = "CARTELSYSTEM"]');
galaxy_center = galaxy_center.union(galaxy_center.edgesWith(galaxy_center));
galaxy_center.removeClass('hidden');

var layout = galaxy_center.layout({
    name: 'concentric',
    minNodeSpacing: 30,
    concentric: function( node ){
        return node.data('innerLevel');
    },
    levelWidth: function ( nodes ){
        return 1;
    }
});

layout.run();

var cartels = cy.nodes('[fedType = "CARTEL"]');
var num_cartels = cartels.size();
var cart_systems = cy.nodes('[fedType = "CARTELSYSTEM"]');
var sys_nodes = cy.nodes('[fedType = "SYSTEM"]');

let sys_layouts = [];

var x = isl.position('x') / 2;
//var x_inc = num_cartels 
var y = 1000;

for (const cart of cartels) {
    var systems = sys_nodes.nodes('[cartel = "' + cart.data('label') + '"]');
    //var cart_sys = cart_systems.nodes('[cartel = "' + cart.data('label') + '"]');
    //systems = systems.union(cart_sys);
    systems.removeClass('hidden');
    console.log(systems);

    sys_layouts.push(systems.layout({
        name: 'concentric',
        boundingBox: { x1: x, y1: y, w: 100, h: 100 },
        concentric: function( node ){
            return node.data('outerLevel');
        },
        levelWidth: function ( nodes ){
            return 1;
        }
    }));

    sys_layouts[sys_layouts.length - 1].run();

    x = x + 250;
    //y = y + 50;
}
*/