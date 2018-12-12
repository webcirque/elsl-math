// elsl.math.geometric
function ComplexNumber(r, i) {
    this.realPart = r;
    this.imaginaryPart = i;
    this.plus = function () {
        
    };
    this.minus = function () {
        
    };
    this.multiply = function () {
        
    };
    this.divide = function () {
        
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
    };
    this.set2dRadicalPos = function () {
        
    };
    this.plus = function () {
        
    };
    this.minus = function () {
        
    };
    this.innerProduct = function () {
        
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
