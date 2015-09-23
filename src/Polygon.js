    function Polygon(cx, cy, radius, rotation, sideCount) {
        this.cx = cx;
        this.cy = cy;
        this.radius = radius;
        this.rotation = rotation;
        this.sideCount = sideCount;
        this.update();
    };

    Polygon.prototype.update = function() {
        this.peripherals = [];
        this.baseAngle = ((2 * Math.PI) / this.sideCount);
        this.center = new p5.Vector(this.cx, this.cy);
        this.apoOffset = this.baseAngle / 2;
        this.vertices = [];
        this.apoMag = this.radius * Math.cos(Math.PI / this.sideCount);
        this.circumVector = new p5.Vector.fromAngle(this.rotation);
        this.circumVector.mult(this.radius);
        this.apoVector = new p5.Vector.fromAngle(this.rotation + this.apoOffset);
        this.apoVector.mult(this.apoMag);
    };

    Polygon.prototype.resize = function(newRadius) {
        this.radius = newRadius;
        this.update();
    };
    Polygon.prototype.grow = function(rDelta) {
        this.radius += rDelta;
        this.update();
    };
    Polygon.prototype.reorient = function(newAngle) {
        this.rotation = newAngle;
        this.update();
    };
    Polygon.prototype.spin = function(sDelta) {
        this.rotation += sDelta;
        this.update();
    };
    Polygon.prototype.establishVertices = function() {
        for (var i = 0; i < this.sideCount; i++) {
            var tmpVector = this.circumVector.copy();
            tmpVector.rotate(i * this.baseAngle);
            tmpVector.add(this.center);
            this.vertices[i] = tmpVector;
        };
        // console.log(this);
    };
    Polygon.prototype.display = function() {
        this.establishVertices();
        this.vertices.forEach(function(vertex, vID) {
            var nextIndex = (vID + 1) % this.sideCount;
            var nextVertex = this.vertices[nextIndex];
            line(vertex.x, vertex.y, nextVertex.x, nextVertex.y);
        }, this);
        // console.log(this);
    };
    Polygon.prototype.tesselate = function() {
        this.display();
    };