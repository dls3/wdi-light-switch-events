document.addEventListener('DOMContentLoaded', function() {
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
});
