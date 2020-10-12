/*----------------------------------------*\
  dictee - index.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2020-10-05 17:00:09
  @Last Modified time: 2020-10-11 20:48:33
\*----------------------------------------*/

var Recognition = webkitSpeechRecognition;
var recognition = new Recognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.onresult = function(event){
	var id = event.results.length - 1;
	var sentence = event.results[id][0].transcript;
	var words = sentence.split(" ");

}
recognition.start();



class Particle{
	constructor(origin){
		this.x = origin[0];
		this.y = origin[1];
		this.speedX = Math.random() * 10;
		this.speedY = (Math.random() * 20) - 10;
		this.gravity = 1;
	}
	move(){
		this.speedX = this.speedX - this.gravity;
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedy;
	}
}