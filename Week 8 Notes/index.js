

//console.log(document.getElementsByClassName("options"));
//console.log(document.getElementsByClassName("options")[0].innerHTML);
//this is a comment
const images= ["download.jpeg","download (1).jpeg","download (2).jpeg"];
const title = ["ramen", "pizza", "tacos"];
for(i=0;i<document.getElementsByClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';

  document.getElementsByClassName('options')[i].addEventListener("click", function(){alert("you clicked a div")});
}
