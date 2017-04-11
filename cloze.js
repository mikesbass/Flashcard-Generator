var Cloze = function(text, cloze) {

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '________');

}

        Cloze.prototype.printAnswer = function() {

            console.log('Incorrect. Here is the answer: \n' + this.text.replace(/[{()}]/g, ''));
        }

        module.exports = Cloze;