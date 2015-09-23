describe('Polygon', function() {
    var myPolygon;

    beforeEach(function() {
        myPolygon = new Polygon(100, 100, 50, 0, 6);
    });

    describe('init', function() {
        it('initializes with a cx', function() {
            expect(myPolygon.cx).toBe(100);
        });
        it('initializes with a cy', function() {
            expect(myPolygon.cy).toBe(100);
        });
        it('initializes with a radius', function() {
            expect(myPolygon.radius).toBe(50);
        });
        it('initializes with a rotation', function() {
            expect(myPolygon.rotation).toBe(0);
        });
        it('initializes with a sideCount', function() {
            expect(myPolygon.sideCount).toBe(6);
        });
    });


    describe('update', function() {
        it('assigns a baseAngle', function() {
            expect(myPolygon.baseAngle).toBeNumber();
            console.log(myPolygon);

        });
        it('assigns a center', function() {
            expect(myPolygon.center).toBeObject();
        });
        it('assigns a apoOffset', function() {
            expect(myPolygon.apoOffset).toBeNumber();

        });
        it('assigns a apoMag', function() {
            expect(myPolygon.apoMag).toBeNumber();

        });
        it('assigns a vertices', function() {
            expect(myPolygon.vertices).toBeArray();

        });
        it('assigns a circumVector', function() {
            expect(myPolygon.circumVector).toBeObject();


        });
        it('assigns a apoVector', function() {
            expect(myPolygon.apoVector).toBeObject();

        });

    });

    describe('resize', function() {
        it('changes the ploygons radius', function() {
            myPolygon.resize(125);
            expect(myPolygon.radius).toBe(125);
        });
    });
    describe('grow', function() {
        it('adjust the polygon radius by a certain amount', function() {
            myPolygon.grow(25);
            expect(myPolygon.radius).toBe(75);
        });
    });

    describe('establishVertices', function() {
        it('assigns a p5.Vector values to each of the vertices', function() {
            myPolygon.establishVertices();
            expect(myPolygon.vertices[0]).toBeObject();
        });
    });

    describe('display', function() {
        it('draws a p5.line between each of the vertices', function() {
            // myPolygon.display();
        });
    });
});