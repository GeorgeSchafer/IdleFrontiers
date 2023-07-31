
class Fraction {
    constructor(){
        this.numerator = 0;
        this.denominator = 0;
        this.isPositive = true;
        this.isCapped = false;
    }

    constructor(intA, intB){
        super();
        this.numerator = intA;
        this.denominator = intB;
        validate();
    }

    constructor(intA, bool){
        super(intA, intA, bool);
    }

    constructor(intA, intB, bool){
        super(intA, intB);
        this.isCapped = bool;
        validate();
    }

    validate(){
        if(this.numerator != 0 && this.denominator === 0){
            throw new Error('Cannot divide by zero.');
        } else if(this.numerator < 0 && this.denominator < 0){
            this.numerator = Math.abs(this.numerator);
            this.denominator = Math.abs(this.denominator);
            this.isPositive = true;
        } else if(this.numerator < 0 || this.denominator < 0){
            this.numerator = Math.abs(this.numerator);
            this.denominator = Math.abs(this.denominator);
            this.isPositive = false;
        } else if(this.isCapped && this.numerator > this.denominator){
            this.numerator = this.denominator;
        }
    }

    #isWhole(){
        return this.numerator % this.denominator === 0;
    }

    toInteger(){
        if(this.#isWhole()){
            return this.numerator / this.denominator;
        } else {
            throw Error('Cannot represent this fraction as an integer.')
        }
    }
    
}

export default Fraction;
