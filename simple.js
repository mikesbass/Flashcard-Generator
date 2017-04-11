var Simple = function(front, back) {
    this.front = front;
    this.back = back;
}

	Simple.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
	};

	Simple.prototype.printFront = function() {
    console.log(this.front);
	}

	Simple.prototype.printAnswer = function() {
    console.log('Sorry, the correct answer is ' + this.back + '.');
	}

	module.exports = Simple;