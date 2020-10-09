


function RPNCalculator () {
    this.stack = [];
    this.total = 0;

}


const rpnCalculatorInstance = new RPNCalculator();


RPNCalculator.prototype.push = function (num) {
     this.stack.push(num);
}

RPNCalculator.prototype.value = function () {
    return this.total;
}


RPNCalculator.prototype.plus = function () {
    if(this.stack.length >=2) {
        let num2 = this.stack.pop();
        let num1 = this.stack.pop();
        this.total = num1 + num2 ;
        this.push(this.total); // === this.stack.push (this.total); (The`push` in this line is the Array.push() method not ours)
    } else{
        throw 'rpnCalculatorInstance is empty';
    }

}


RPNCalculator.prototype.minus = function () {
    if(this.stack.length >=2) {
        let num2 = this.stack.pop();
        let num1 = this.stack.pop();

        this.total = num1-num2;
        this.push (this.total);
    } else{
        throw 'rpnCalculatorInstance is empty';
    }
}

RPNCalculator.prototype.times = function () {
    if(this.stack.length >=2) {
        let num2 = this.stack.pop();
        let num1 = this.stack.pop();

        this.total = num1 * num2;
        this.push (this.total);
    } else {
        throw 'rpnCalculatorInstance is empty';
    }
}

RPNCalculator.prototype.divide = function () {
    if(this.stack.length >=2) {
        let num2 = this.stack.pop ();
        let num1 = this.stack.pop ();

        this.total = num1 / num2;
        this.push (this.total);  

    } else {
        throw 'rpnCalculatorInstance is empty';
    }
}



