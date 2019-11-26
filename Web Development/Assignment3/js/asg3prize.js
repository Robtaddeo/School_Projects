var list = document.getElementsByTagName("UL")[0];
var prizes = [
  ["Television", "$100"],
  ["iPhone", "$700"],
  ["Xbox", "$250"],
  ["Macbook", "$3000"],
  ["Trip to Jamaica", "$2000"]
];

document.addEventListener('DOMContentLoaded', function(){

  // Prizes Array
  console.log('test');


  function randArray(){
      console.log('geek');
      for (var i = 0; i < prizes.length; i++) {
        var ul = document.getElementById("prizeList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(prizes[i][0]));
        ul.appendChild(li);
      }
  }

  randArray();
}, false);

function win() {
  var randomNum = Math.floor(Math.random() * 5);
  var p = document.getElementById("prizeP");
  p.innerHTML = "Congratulations! You won a: " + prizes[randomNum][0] + "! Current estimated vaulue is " + prizes[randomNum][1];
}
