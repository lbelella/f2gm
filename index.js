import style from './style.js';
import elements from './elements.js'

var gm = cytoscape({
    container: document.getElementById('gm'),
    style: style,
    elements: elements,

    layout: { 
        name: 'concentric',
        concentric: function( node ){
            return node.data("level")
        }
    }
  });