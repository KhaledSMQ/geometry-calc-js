var GeoCalc = {
    sqPerim: function(a) {
        return 4 * a;
    },
    rectPerim: function(l, b) {
        return 2 * (l + b);
    },
    circum: function(r) {
        return 2 * Math.PI * r;
    },
    sqArea: function(a) {
        return Math.pow(a, 2);
    },
    rectArea: function(l, b) {
        return l * b;
    },
    triArea: function(b, h) {
        return (b * h) / 2;
    },
    trapArea: function(b1, b2, h) {
        return ((b1 + b2) * h) / 2;
    },
    circArea: function(r) {
        return Math.PI * Math.pow(r, 2);
    },
    cubeSurfArea: function(a) {
        return 6 * Math.pow(a, 2);
    },
    cylSurfArea: function(r, h) {
        return 2 * Math.PI * r * h;
    },
    coneSurfArea: function(r, l) {
        return Math.PI * r * l;
    },
    sphereSurfArea: function(r) {
        return 4 * Math.PI * Math.pow(r, 2)
    },
    cylVol: function(b, h) {
        return b * h;
    },
    coneVol: function(b, h) {
        return (b * h) / 3
    },
    sphereVol: function(r) {
        return 4 * Math.PI * (Math.pow(r, 3) / 3);
    }
}
