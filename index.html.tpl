<!doctype html>

<html>

<head>
    <title>Federation 2 Galaxy Map (F2GM)</title>
    <script src="cytoscape.min.js"></script>
</head>

<style>
    #gm {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
</style>

<body>
    <div id="gm"></div>
    <script>
      var gm = cytoscape({
        container: document.getElementById('gm'),

        layout: { name: 'breadthfirst' },
        //layout: { name: 'concentric' },
        //layout: { name: 'circle' },

        elements: [
$CYTO_DATA]
      });
    </script>
</body>
</html>