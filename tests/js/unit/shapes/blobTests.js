Test.Modules.BLOB = {
    'add blobs': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        var blob1 = new Kinetic.Blob({
            points: [{
                x: 73,
                y: 140
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 170
            }],
            stroke: 'blue',
            strokeWidth: 10,
            draggable: true,
            fill: '#aaf',
            tension: 0.8
        });

        var blob2 = new Kinetic.Blob({
            points: [{
                x: 73,
                y: 140
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }],
            stroke: 'red',
            strokeWidth: 10,
            draggable: true,
            fill: '#faa',
            tension: 1.2,
            scale: 0.5,
            x: 100,
            y: 50
        });


        layer.add(blob1);
        layer.add(blob2);
        stage.add(layer);

        test(blob1.getTension() === 0.8, 'blob1 tension should be 0.8');
        test(blob2.getTension() === 1.2, 'blob2 tension should be 1.2');

        test(blob1.getClassName() === 'Blob', 'getClassName should be Blob');

        //console.log(blob1.getPoints())


    },
    'add blob and define tension first': function(containerId) {
        var stage = new Kinetic.Stage({
            container: containerId,
            width: 578,
            height: 200
        });
        var layer = new Kinetic.Layer();

        /*
        var blob = new Kinetic.Blob({
            tension: 0.8,
            points: [{
                x: 73,
                y: 140
            }, {
                x: 340,
                y: 23
            }, {
                x: 500,
                y: 109
            }, {
                x: 300,
                y: 170
            }],
            stroke: 'blue',
            strokeWidth: 10,
            draggable: true,
            fill: '#aaf'

        });
        */

        var json = '{"attrs":{"tension":0.8,"points":[{"x":73,"y":140},{"x":340,"y":23},{"x":500,"y":109},{"x":300,"y":170}],"stroke":"blue","strokeWidth":10,"draggable":true,"fill":"#aaf"},"className":"Blob"}';
        var blob = Kinetic.Node.create(json);

        layer.add(blob);
        stage.add(layer);

        //console.log(blob.toJSON());

        test(stage.get('Blob')[0].getPoints().length === 4, 'created blob should have 4 points');

    }
};
