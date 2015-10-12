function DisplayFactory() {
    this.name = "factory";
}
DisplayFactory.prototype.getDisplayer = function(polygon) {
    // var polygon.eve
    var even = polygon.even;
    var ppe = polygon.pointsPerEdge;
    var ppEven = ppe % 2;
    var cFlag = polygon.centrality;
    var pFlag = polygon.parallel;

    if ((polygon.pointsPerEdge == null) || (polygon.pointsPerEdge == 0)) {
        return new BaseDisplayer(polygon);
    } else {
        if (even == true) {
            if (ppEven == 0) {
                if (cFlag == true) {
                    if (pFlag == true) {
                        return new TTTTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new TTTFDisplayer(polygon);

                    };

                } else if (cFlag == false) {
                    if (pFlag == true) {
                        return new TTFTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new TTFFDisplayer(polygon);

                    };

                }
            } else if (ppEven != 0) {
                if (cFlag == true) {
                    if (pFlag == true) {
                        return new TFTTDisplayer(polygon);


                    } else if (pFlag == false) {
                        return new TFTFDisplayer(polygon);

                    };

                } else if (cFlag == false) {
                    if (pFlag == true) {
                        return new TFFTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new TFFFDisplayer(polygon);

                    };

                }

            };
        } else if (even == false) {
            if (ppEven == 0) {
                if (cFlag == true) {
                    if (pFlag == true) {
                        return new FTTTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new FTTFDisplayer(polygon);

                    };

                } else if (cFlag == false) {
                    if (pFlag == true) {
                        return new FTFTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new FTFFDisplayer(polygon);

                    };

                }
            } else if (ppEven != 0) {
                if (cFlag == true) {
                    if (pFlag == true) {
                        return new FFTTDisplayer(polygon);


                    } else if (pFlag == false) {
                        return new FFTFDisplayer(polygon);

                    };

                } else if (cFlag == false) {
                    if (pFlag == true) {
                        return new FFFTDisplayer(polygon);

                    } else if (pFlag == false) {
                        return new FFFFDisplayer(polygon);

                    };

                };

            };


        };
    };
};