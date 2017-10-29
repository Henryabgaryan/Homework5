const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const backgroundImg = new Image();
backgroundImg.src = "GenuineShortHarborporpoise.gif";

const owlImg = new Image();
owlImg.src = "owl-2223092_960_720.png";
const evilImg = new Image();
evilImg.src = "Raven.png";
const owlImgtoL = new Image();
owlImgtoL.src = "owltoL.png";
const evil1Img = new Image();
evil1Img.src = "http://www.pngmart.com/files/3/Raven-Flying-PNG-HD.png"

//const checkCollide = function(owl, evil) {
           // return owl.x < evil.x + evil.width && owl.x + owl.width > evil.x && owl.y < evil.y + evil.height && owl.y + owl.height > evil.y
        }
//const forEach = function(arr, func) {
  //const helper = function(index) {
    //if(index === arr.length) {
      //return;
    //}
    //func(arr[index]);

    //helper(index + 1);
 // };

  //helper(0);
//};

 const gameData = {
              owl:{
                x:0,
                y:200,
                img:owlImg,
                width:200,
                height:200,
                xDelta:10,
                yDelta:10
              },
              evil: [ 
              {
                x:1000,
                y:100,
                img:evilImg,
                width:100,
                height:100,
                xDelta:5,
                yDelta:1
              },
              {
                x:0,
                y:300,
                img:evil1Img,
                width:100,
                height:100,
                xDelta:10,
                yDelta:1
              }
            ],
};

            const floorY = canvas.height - 5;
            const maxJumpHeight = 20 ;
            const maxDownHeight = 20;

           
          
            
          const draw = function() {
          ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height)
            const owl = gameData.owl;         
            ctx.drawImage(owl.img,owl.x,owl.y,owl.width,owl.height);
            const evil = gameData.evil[0];
            ctx.drawImage(evil.img,evil.x,evil.y,evil.width,evil.height);
            const evil1 = gameData.evil[1];
            ctx.drawImage(evil1.img,evil1.x,evil1.y,evil1.width,evil1.height);
          };

 
const updateData = function() {
const owl = gameData.owl;
const evil = gameData.evil[0];


};
const owl = gameData.owl;
const evil = gameData.evil[0];
const evil1 = gameData.evil[1];

          const loop = function() {
            draw();
            updateData();
            evil.x = evil.x - evil.xDelta
            if (evil.x <= 0) {
            evil.x = 1000;
           }  evil1.x = evil1.x + evil1.xDelta
            if (evil1.x >= 1000) {
               evil1.x = 0;
} 
             requestAnimationFrame(loop);

          };
          loop();

          const leftKey = 37;
          const upKey = 38;
          const rightKey = 39;
          const downKey = 40;

document.addEventListener('keydown', function(event) {
const owl = gameData.owl;
if(event.keyCode === rightKey) {
  owl.img = owlImg;
  owl.x += owl.xDelta; 
  if(owl.x>=canvas.width-153) {
    owl.x = -53;
  }
} else if(event.keyCode === leftKey) {
  owl.img = owlImgtoL;
  owl.x -= owl.xDelta;
  if(owl.x <= -50){
    owl.x = canvas.width-153;
  } 
} else if(event.keyCode === upKey){
  owl.y -= owl.yDelta
  if(owl.y <= -50){
    owl.y = 350;
  }
} else if(event.keyCode === downKey) {
  owl.y += owl.yDelta
  if (owl.y >= 350) {
    owl.y = -50;
  }
}

   },false);