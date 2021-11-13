console.log('hello!');

let pics = 10;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('photos').innerHTML += "<img src='assets/photos/" + pic + ".jpg'" + "class='photopic' id='pic" + pic+ "' />";
}
