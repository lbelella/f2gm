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

var gm = cytoscape({
    container: document.getElementById('gm'),
    style: style,
    elements: elements,

    layout: { 
        name: 'concentric',
        concentric: function( node ){
            return node.data('level');
        },
        levelWidth: function ( nodes ){
            return 1;
        }
    }
});