//--- UI NAV CHANGE ---
// Get the container elements
var uiNavContainer = document.getElementById('ui-nav');
var panel = document.getElementById('panel');

// Get all buttons with tag="a" inside the nav container
var btns = uiNavContainer.getElementsByTagName('a');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active-ui');
    var oldView = current[0].dataset.view;
    current[0].className = current[0].className.replace(
      ' active-ui',
      ''
    );
    this.className += ' active-ui';
    var newView = this.dataset.view;
    // add class to panel
    oldView = ' ' + oldView;
    newView = ' ' + newView;
    panel.className = panel.className.replace(oldView, '');
    panel.className += newView;
  });
}
