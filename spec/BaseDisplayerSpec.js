describe('BaseDisplayer', function() {
var myDisplay, myPoly;

	beforeEach(function() {
		myPoly = new Polygon(200,200,50, 0, 5);
		myDisplay = new BaseDisplayer(myPoly);
	});

	describe('init', function() {
		it('initializes with a Polygon', function() {
			console.log(myDisplay);
			expect(myDisplay.polygon).toBe(myPoly);
		});
	});
});