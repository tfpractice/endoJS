describe('DisplayFactory', function() {
    var myFactory;

    beforeEach(function() {
        myFactory = new DisplayFactory();
    });

    describe('init', function() {
        it('initlizes with a name', function() {
            expect(myFactory.name).toBe("factory");
        });
    });

});