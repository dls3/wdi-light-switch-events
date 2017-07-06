// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

var lightSwitch = document.querySelector('button');


lightSwitch.addEventListener('click', function(e) {
  if (lightSwitch.className === 'switch on') {
    lightSwitch.className = 'switch off';
  } else {
    lightSwitch.className = 'switch on';
  }
});
