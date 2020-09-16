/////////////////////////////////////////////////////////////
///////////////////////// VARS //////////////////////////////
/////////////////////////////////////////////////////////////
var keyCodeArrow;

/////////////////////////////////////////////////////////////
////////////////////// APPEARENCE ///////////////////////////
/////////////////////////////////////////////////////////////

function backOnTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/////////////////////////////////////////////////////////////
//////////////////////// ARROWS /////////////////////////////
/////////////////////////////////////////////////////////////

// Disable arrow scrolling
window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

function arrowClick(direction) {
  switch (direction) {
    case 0:
    case 87:
    case 38:
      direction = "up";
      arrowEffect(direction);
      break;
    case 1:
    case 65:
    case 37:
      direction = "left"
      arrowEffect(direction);
      break;
    case 2:
    case 83:
    case 40:
      direction = "down"
      arrowEffect(direction);
      break;
    case 3:
    case 68:
    case 39:
      direction = "right"
      arrowEffect(direction);
      break;
    default:
      return 0;
  }

  console.log(`${direction} key was pressed`);
}

document.addEventListener("keydown", function (e) {
  arrowClick(e.keyCode);
});

function arrowEffect(dir) {
  document.querySelector(`#${dir}-arrow`).style.opacity = '.7';
  setTimeout(function () {
    document.querySelector(`#${dir}-arrow`).style.opacity = 'unset';
  }, 200)
}