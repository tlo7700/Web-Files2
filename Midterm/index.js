const quotes = ["Eat a healthy meal","Engage in exercise","Go for a walk","Drink Water", "Practice good sleep hygiene","Have a cup of tea","Sit in the sunlight", "Take a shower or bath","Practice Mindfulness","Take a break","play video games","Listen to music","Read a book","Listen to a podcast","Reflect on things you are grateful for"];

let quotecount = 0;
document.getElementById("newImg").addEventListener("click", buttonClicked);
function buttonClicked(){

  console.log(quotes[quotecount]);
  document.getElementById("display").innerHTML = quotes[quotecount];
  if(quotecount>13){
    quotecount = 0;
    }else{
    quotecount++;
  }
}
