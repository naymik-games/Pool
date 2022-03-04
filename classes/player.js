class Player {

  // constructor, simply turns obj information into class properties and creates
  // an array called "chain" which will contain chain information
  constructor(obj) {
    if (obj == undefined) {
      obj = {}
    }
    this.name = (obj.name != undefined) ? obj.name : 'player';
    this.ballsMadeTotal = 0;
    this.ballsMadeTurn = 0;
    this.ballType = ''
  }

  // returns the number of rows in board
  getName() {
    return this.name;
  }
  addBallMade(){
    this.ballsMadeTotal++;
    this.ballsMadeTurn++;
  }
  setType(type){
    this.ballType = type;
  }
}