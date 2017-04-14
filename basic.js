var Basic = function(front, back) {
    this.front = front;
    this.back = back;
}

	Basic.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
	};

	Basic.prototype.printFront = function() {
    console.log(this.front);
	}

	Basic.prototype.printAnswer = function() {
    console.log('Sorry, the correct answer is ' + this.back + '.');
	}

	module.exports = Basic;