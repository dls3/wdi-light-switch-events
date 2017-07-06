// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

// Swap the colors of the body's background and text by adding or removing the dark/light class

var lightSwitch = document.querySelector('button');
var body = document.querySelector('body');


lightSwitch.addEventListener('click', function(e) {
  if (lightSwitch.className === 'switch on') {
    lightSwitch.className = 'switch off';
    body.className = 'dark';
  } else {
    lightSwitch.className = 'switch on';
    body.className = 'light';
  }
});
