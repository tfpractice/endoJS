describe('Tesselation', function() {
    var myBase, myTess;

    beforeEach(function() {
        myBase = new Polygon(60, 60, 60, 0, 6);
        myTess = new Tesselation(60,60, myBase, 3, true);
    });

    describe('init', function() {
        it('initalizes with a baseGon', function() {
            expect(myTess.baseGon).toBe(myBase);
        });
        it('initializes with a depth', function() {
            expect(myTess.depth).toBe(3);
        });
        it('initializes with a propFlag', function() {
            expect(myTess.propFlag).toBe(true);
        });
        it('initializes with a baseAngle', function() {
            expect(myTess.baseAngle).toBe(myBase.baseAngle);
        });
        it('initializes with a apoOffset', function() {
            expect(myTess.apoOffset).toBe(myBase.apoOffset);
        });
        it('initializes with a cx', function() {
            expect(myTess.cx).toBe(60);
        });
        it('initializes with a cy', function() {
            expect(myTess.cy).toBe(60);
        });
        it('initializes with a radius', function() {
            expect(myTess.radius).toBeNumber();
        });
        it('initializes with a rotation', function() {
            expect(myTess.rotation).toBeNumber();
        });
        it('initializes with a sideCount', function() {
            expect(myTess.sideCount).toBe(6);
        });
    });

    describe('subclass', function() {
        it('inherits methods from Polygon', function() {
            expect(myTess instanceof Polygon).toBeTrue();
        });

        describe('update', function() {
            it('calls the Polygon::update method', function() {
                myTess.update();
                expect(myTess.vertices).toBeArray();
            });
        });
    });

});