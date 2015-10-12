describe('Displayer', function() {
	var myDisplay, myPoly;

	beforeEach(function() {
		myPoly = new Polygon(200,200,50, 0, 5);
		myDisplay = new Displayer(myPoly);
	});

	describe('init', function() {
		it('initializes with a Polygon', function() {
			expect(myDisplay.polygon).toBe(myPoly);
		});
	});
});