// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

// Swap the colors of the body's background and text by adding or removing the dark/light class

// Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turned off the lights?" when it's off

var lightSwitch = document.querySelector('button');
var body = document.querySelector('body');
var text = document.querySelector('.status');

lightSwitch.addEventListener('click', function(e) {
  if (lightSwitch.className === 'switch on') {
    lightSwitch.className = 'switch off';
    body.className = 'dark';
    text.innerHTML = "It's so bright in here!";
  } else {
    lightSwitch.className = 'switch on';
    body.className = 'light';
    text.innerHTML = 'Hey, who turned off the lights?'
  }
});
