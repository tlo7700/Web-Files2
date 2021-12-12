console.log('hello!');

let pics = 10;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('Photos').innerHTML += "<img src='Assets/Photos/" + pic + ".jpg'" + "class='photopic' id='pic" + pic+ "' />";
}
