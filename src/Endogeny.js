var myPoly, myTess;

function setup() {


    createCanvas(windowWidth, windowHeight);

    myPoly = new Polygon(300, 200, 10, 0, 4);
    myTess = new Tesselation(500, 500, myPoly, 3, true);

    // console.log(myPoly);

    background(128);
    myPoly.display();
    myTess.tesselate();
    myTess.display();
    console.log(myTess);
}

function draw() {

    background(128);
    // myPoly.display();
    myPoly.spin(0.05);
    myPoly.grow(0.15);

    myPoly.display();
    myTess.spin(-.01);
    myTess.tesselate();

    // myTess.display();


}