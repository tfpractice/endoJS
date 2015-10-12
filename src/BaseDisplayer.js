function BaseDisplayer (polygon) {
Displayer.call(this, polygon);
}

BaseDisplayer.prototype = Object.create(Displayer.prototype);
