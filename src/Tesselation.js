function Tesselation(cx, cy, baseGon, depth, propFlag) {
    this.baseGon = baseGon;
    this.cx = cx;
    this.cy = cy;
    this.sideCount = this.baseGon.sideCount;
    this.depth = depth;
    this.propFlag = propFlag;
    this.baseAngle = baseGon.baseAngle;
    this.apoOffset = this.baseGon.apoOffset;
    if (this.propFlag == true) {
        this.radius = this.baseGon.radius * Math.pow(3, this.depth);
        this.rotation = this.baseGon.rotation;
    } else if (propFlag == false) {
        this.radius = this.baseGon.radius * Math.pow((3 * (Math.sin(Math.PI - (this.baseAngle / 2)))), this.depth);
        this.rotation = this.baseGon.rotation + (this.apoOffset * this.depth);
    };
    this.update();
    // console.log(this.prototype);
}

Tesselation.prototype = Object.create(Polygon.prototype);

Tesselation.prototype.update = function() {

    Polygon.prototype.update.call(this);
    this.peripherals = [];
    if (this.propFlag == true) {
        this.inscribedMagnitude = (this.radius * Math.sin((Math.PI - this.baseAngle) / 2));
        this.exoMagnitude = this.inscribedMagnitude * 2;
        this.endoMagnitude = (this.inscribedMagnitude * 2) / 3;
        this.centralRadius = this.radius / 3;
        this.periRadius = this.radius / 3;
        this.centralRotation = this.rotation;
        this.periRotation = this.rotation;
        this.endoVector = new p5.Vector.fromAngle(this.rotation + this.apoOffset);
        this.endoVector.mult(this.endoMagnitude);
        this.exoVector = new p5.Vector.fromAngle(this.rotation + this.apoOffset);
        this.exoVector.mult(this.exoMagnitude);
    } else if (this.propFlag == false) {
        this.inscribedMagnitude = (this.radius * Math.sin((Math.PI - this.baseAngle) / 2));
        this.exoMagnitude = (this.inscribedMagnitude) * 2;
        this.endoMagnitude = (this.radius * 2) / 3;
        this.centralRadius = this.radius / (3 * Math.sin((Math.PI - this.baseAngle) / 2));
        this.periRadius = this.centralRadius * Math.sin((Math.PI - this.baseAngle) / 2);
        this.centralRotation = this.rotation - this.apoOffset;
        this.periRotation = this.rotation;
        this.endoVector = new p5.Vector.fromAngle(this.rotation);
        this.endoVector.mult(this.endoMagnitude);
        this.exoVector = new p5.Vector.fromAngle(this.rotation + this.apoOffset);
        exoVector.mult(this.exoMagnitude);
    }
    // console.log(this);
};

Tesselation.prototype.tesselate = function() {
    if (this.depth > 1) {
        // if (parallel == true) {
        //         plugHoles();
        // }
        var central = new Tesselation(this.cx, this.cy, this.baseGon, this.depth - 1, this.propFlag);
        central.resize(this.centralRadius);
        central.reorient(this.centralRotation);
        central.tesselate();
        for (var t = 0; t < this.sideCount; t++) {
            // var  endoInstance = new p5.Vector(); 
            var endoInstance = this.endoVector.copy();
            endoInstance.rotate(t * this.baseAngle);
            endoInstance.add(this.center);
            this.peripherals[t] = new Tesselation(endoInstance.x, endoInstance.y, this.baseGon, this.depth - 1, this.propFlag);
            this.peripherals[t].resize(this.periRadius);
            this.peripherals[t].reorient(this.periRotation);
            // append(peripherals, peripherals[t]);
            this.peripherals[t].tesselate();
        }
    } else if (this.depth == 1) {
        // if (this.propFlag == true) {
        //     plugHoles();
        // }
        // var central = objectFactory.getObject(center.x, center.y, centralRadius, baseGon, centralRotation, parallel, true);
        var central = new Tesselation(this.cx, this.cy, this.baseGon, this.depth - 1, this.propFlag);
        central.resize(this.centralRadius);
        central.reorient(this.centralRotation);
        central.tesselate();
        for (var t = 0; t < this.sideCount; ++t) {
            // var endoInstance = new new p5.Vector();
            var endoInstance = this.endoVector.copy();
            endoInstance.rotate(t * this.baseAngle);
            endoInstance.add(this.center);
            // peripherals[t] = objectFactory.getObject(endoInstance.x, endoInstance.y, periRadius, baseGon, periRotation, parallel, false);
            this.peripherals[t] = new Tesselation(this.cx, this.cy, this.baseGon, this.depth - 1, this.propFlag);
            this.peripherals[t].resize(this.periRadius);
            this.peripherals[t].reorient(this.periRotation + ((t) * this.baseAngle));
            // append(peripherals, peripherals[t]);
            this.peripherals[t].tesselate();
        }
    } else if (this.depth == 0) {
        this.display();
        central = new Polygon(this.cx, this.cy, this.baseGon.radius, this.baseGon.rotation, this.baseGon.sideCount);
        central.tesselate();
        // Polygon.prototype.display.call(this);
    }
    this.connectPeripherals();

};

Tesselation.prototype.connectPeripherals = function() {
    this.peripherals.forEach(function(peri, pID, pArray) {
        console.log(peri);
        var center = peri.center;
        var nextIndex = (pID + 1) % this.sideCount;
        var nextPoly = pArray[nextIndex];
        var nextCenter = nextPoly.center;
        line(center.x, center.y, nextCenter.x, nextCenter.y);
    }, this);
};