//require other components

export default class Game extends Phaser.State {

  constructor() {
    //object level properties
    super();
  }

  create() {
	  this.add.sprite(0,0,"game_bg");
	  this.clouds = this.add.group();
	  this.score = 6;
	  var style = { font: "24px Arial", fill: "#FFFFFF" };
	  this.txtScore = this.add.text(10, 10, this.score.toString(), style);
  }


  update() {
  }


}
