// elsl.math.geometric
function ComplexNumber(r = 0, i = 0) {
    this.realPart = r;
    this.imaginaryPart = i;
    this.plus = function (object = 0) {
        if (object.constructor == Number) {
            return new ComplexNumber(this.realPart + object, this.imaginaryPart);
        } else if (object.constructor == ComplexNumber) {
            return new ComplexNumber(this.realPart + object.realPart, this.imaginaryPart + object.imaginaryPart);
        } else {
            throw(new TypeError("Invalid object type."));
        };
    };
    this.minus = function (object = 0) {
        if (object.constructor == Number) {
            return new ComplexNumber(this.realPart - object, this.imaginaryPart);
        } else if (object.constructor == ComplexNumber) {
            return new ComplexNumber(this.realPart - object.realPart, this.imaginaryPart - object.imaginaryPart);
        } else {
            throw(new TypeError("Invalid object type."));
        };
    };
    this.multiply = function (object = 1) {
        if (object.constructor == Number) {
            return new ComplexNumber(this.realPart * object, this.imaginaryPart * object);
        } else if (object.constructor == ComplexNumber) {
            return new ComplexNumber(this.realPart * object.realPart - this.imaginaryPart * object.imaginaryPart, this.realPart * object.imaginaryPart + this.imaginaryPart * object.realPart);
        } else {
            throw(new TypeError("Invalid object type."));
        };
    };
    this.divide = function (object) {
        
    };
}
function Vector() {
    this.position = [];
    this.setPosition = function (...pos) {
        pos.forEach((e, i) => {
           if (e.constructor != Number && e.constructor != ComplexNumber)  {
               throw(new TypeError("Invalid position announce at index $1.".replace("$1", i)));
           }
        });
        this.position = pos;
        return this;
    };
    this.set2dRadicalPos = function () {
        
    };
    this.plus = function () {
        
    };
    this.minus = function () {
        
    };
    this.innerProduct = function () {
        
    };
    this.amplify = function () {
        
    };
    this.getModular = function () {
        
    };
    this.isParrallelTo = function () {
        
    };
    this.isVerticalTo = function () {
        
    };
    this.getCosAngle = function () {
        
    };
}
