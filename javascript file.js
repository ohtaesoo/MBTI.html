var a = 'day';
var b = 'night';
document.getElementById("daynight").onclick = function() {click()}
function click(){
    if (document.getElementById('daynight').value === b) {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      var x = document.querySelectorAll('h1, h3, #B')
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.borderColor = "white";
      }
      document.getElementById('daynight').value = a;
    } else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      var x = document.querySelectorAll('h1, h3, #B')
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.borderColor = "black";
      }
      document.getElementById('daynight').value = b;
    }
  }
