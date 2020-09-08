var canvas = document.querySelector('canvas');
var text = document.querySelector('p');
var rem = 16;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - (3 * rem);

var Vakjes = 30;

var VakjesBreedte = canvas.width / Vakjes;
var VakjesHoogte = canvas.height / Vakjes;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



const GridObjects = {
  MUUR: 0,
  NIETS: 1,
  APPELTJE: 2,
  SLANGEN_HOOFD: 3,
  SLANGEN_LICHAAM: 4
};












const Directie = {
  Links: 0,
  Rechts: 1,
  Boven: 2,
  Onder: 3
}



var i = Math.floor( Vakjes / 2);
var slang = new Slang(i, i);


var ctx = canvas.getContext('2d');



let AppleImage = document.querySelector('#apple');
let WallImage = document.querySelector('#wall');
let HeadImage = document.querySelector('#head');
let BodyImage = document.querySelector('#body');

function teken() {
  ctx.fillStyle = "#ffffff"; //rgb(255, 255, 255);
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();

  for (var i = 0; i < Vakjes; i++) {
    for (var j = 0; j < Vakjes; j++) {
      var obj = model.grid[i][j];

      switch (obj) {
        case GridObjects.APPELTJE:
          DrawApple(i * VakjesHoogte, j * VakjesBreedte);
          break;
        case GridObjects.MUUR:
          DrawWall(i * VakjesHoogte, j * VakjesBreedte);
          break;
        case GridObjects.NIETS:
          // ??
          break;
        case GridObjects.SLANGEN_HOOFD:
          DrawHead(i * VakjesHoogte, j * VakjesBreedte);
          break;
        case GridObjects.SLANGEN_LICHAAM:
          DrawBody(i * VakjesHoogte, j * VakjesBreedte);
          break;
        default:
          alert("no matching enum for obj in grid.");
          break;
      }
    }
  }
}

function DrawApple(x, y){
  ctx.drawImage(AppleImage, y, x, VakjesBreedte, VakjesHoogte);
}

function DrawWall(x, y){
  ctx.drawImage(WallImage, y, x, VakjesBreedte, VakjesHoogte);
}

function DrawHead(x, y) {
  ctx.drawImage(HeadImage, y, x, VakjesBreedte, VakjesHoogte);
}

function DrawBody(x, y) {
  ctx.drawImage(BodyImage, y, x, VakjesBreedte, VakjesHoogte);
}

var model = new Model()
teken();

window.setInterval( () => {
  slang.beweeg();
  model.update();
  teken();
}, 1000);
