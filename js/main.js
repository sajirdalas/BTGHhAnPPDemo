function init() {

CurrentColumn = 0;
CurrentFolder = "normal"

buttons = new Array(7);
 for (var i = 0; i < 7; i++) {
    buttons[i] = new Array(5);
  }
active = new Array(7)
	for (var i = 0; i < 7; i++) {
    active[i] = new Array(5);
  }

  for (var x=1; x<8; x++) {
  	for (var y = 1; y<6; y++) {
  		name = "box"+x.toString()+y.toString()
  		//var tempBut = document.getElementById(name);
  		buttons[x-1][y-1]= document.getElementById(name);
  		active[x-1][y-1]= false;
  		//console.log(name);
  		buttons[x-1][y-1].addEventListener("click",function(){
  			var AudioT = document.getElementById("audioT");
  			var localx = this.id.charAt(3);
  			var localy = this.id.charAt(4);
  			console.log(localx+localy);
  			if (active[parseInt(localx)-1][parseInt(localy)-1]){
  				active[parseInt(localx)-1][parseInt(localy)-1]=false;

          //Remove ActiveClass
          this.className = this.className.replace("ActiveButton", '' );
          //Add Inactive Class
  				this.className += "InactiveButton";
  			}else{
  				active[parseInt(localx)-1][parseInt(localy)-1]=true;
          //Remove Inactive Class
          this.className = this.className.replace("InactiveButton", '' );
          //Add Active Class
  			this.className += "ActiveButton";
      }

        // var AudioT= new Audio("sounds/HH"+localx+".wav");
        // //AudioT.setAttribute('src',"sounds/HH"+localx+".wav");
        // AudioT.play();


  		},false);
  		//tempBut.addEventListener("click",function(){console.log("CLICK "+name);},false);
  	};

  }

IntSet = setInterval(function() {
    PlaySelected();
  }, 1000);


// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", function( event ) {
//     //alpha: rotation around z-axis
//     var rotateDegrees = event.alpha;
//     //gamma: left to right
//     var leftToRight = event.gamma;
//     //beta: front back motion
//     var frontToBack = event.beta;
                  
//     handleOrientationEvent( frontToBack, leftToRight, rotateDegrees );
//     }, false);
// }
 
// var handleOrientationEvent = function( frontToBack, leftToRight, rotateDegrees ){
//     console.log(rotateDegrees.toString);
//     var body = document.getElementById("body");
//     if(rotateDegrees<-15){
//       body.className = "left";
//       CurrentFolder = "light"
//     }else if (rate Degrees>15) {
//       body.className = "right";
//       CurrentFolder = "hard"
//     }else{
//       body.className = "center";
//       CurrentFolder = "normal"
//     }
// };



}

function PlaySelected(){

  var TempCurColumn

  if(CurrentColumn==0){
    TempCurColumn=4;
  }else{
    TempCurColumn=CurrentColumn-1;
  }

  for (var y = 0; y < 7; y++) {
    //console.log("Y: "+y.toString()+" TempCurColumn: "+TempCurColumn.toString());
    buttons[y][TempCurColumn].className = buttons[y][TempCurColumn].className.replace(" Sounding", '' );
   // console.log( buttons[y][TempCurColumn].className);
  }

  var audioTs = new Array(7);
  for (var i = 0; i < 7; i++) {
    if (active[i][CurrentColumn]){
      audioTs[i] = new Audio("sounds/"+CurrentFolder+"/HH"+(i+1).toString()+".wav");
     // console.log(buttons[i][CurrentColumn].className);
      buttons[i][CurrentColumn].className += " Sounding";
      //console.log(buttons[i][CurrentColumn].className);

    }
  };

for(var x = 0; x < 7; x++){
  if(audioTs[x]!=null){
    audioTs[x].play();
  }
}

CurrentColumn++;

if(CurrentColumn>4){
  CurrentColumn=0;
}

}

window.onload = function(){
	init();
};
