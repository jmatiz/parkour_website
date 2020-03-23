function hide() {
    
    var x = document.getElementsByClassName('reveal_content');

    for (i=0; i < x.length; i++) {

      x[i].style.visibility ="hidden";
   }
}

window.onload= hide;


function showContent() {
   var x = document.getElementsByClassName('reveal_content');

   var i;
 

   for (i=0; i < x.length; i++) {


         if (x[i].style.visibility == "visible") {
            x[i].style.visibility ="hidden";
         }
         else {
            x[i].style.visibility ="visible";
         }
   }
   
}

function showLabel1() {

   document.getElementById('label1').style.opacity= 1;
}

function hideLabel1() {

   document.getElementById('label1').style.opacity= 0;
}

function showLabel2() {

   document.getElementById('label2').style.opacity= 1;
}

function hideLabel2() {

   document.getElementById('label2').style.opacity= 0;
}

function showLabel3() {

   document.getElementById('label3').style.opacity= 1;
}

function hideLabel3() {

   document.getElementById('label3').style.opacity= 0;
}


function opacityChange1() {
   

   document.getElementById('button1').style.opacity = 1;
         
   
}

function opacityChange2() {
   

   document.getElementById('button1').style.opacity = .2;
         
   
}

function opacityChange1_2() {
   

   document.getElementById('button2').style.opacity = 1;
         
   
}

function opacityChange2_2() {
   

   document.getElementById('button2').style.opacity = .2;
         
   
}

function opacityChange1_3() {
   

   document.getElementById('button3').style.opacity = 1;
         
   
}

function opacityChange2_3() {
   

   document.getElementById('button3').style.opacity = .2;
         
   
}

function collapse_all() {  

   $('.collapse_all').collapse('hide');
}

function pauseVideo() {

       var video = document.getElementById("background");
       var button = document.getElementById("play");

       if (video.paused) {
          video.play();
          button.src= "images/pause.png";
       } else {
          video.pause();
          button.src= "images/play.png";
       }
}

function muteVideo() {

       var video = document.getElementById("background");
       var button = document.getElementById("mute");

       if (video.muted) {
          video.muted=false;
          button.src= "images/mute.png";
       } else {
          video.muted=true;
          button.src= "images/volume.png";
       }
}