/**
 * @file vivusLoop.js
 * @description This file contains code that apply loop animation on SVG using vivus.
 * @author Haradhan Sharma
 * @license MIT
 * @dependencies vivusJS (https://maxwellito.github.io/vivus/)
 */

$(document).ready(function() {

// below example taken from a forum

new Vivus('arrow_to_video', {type: 'delayed', duration: 200,animTimingFunction: Vivus.EASE}, function (myVivus) {
    setTimeout(function() {
      myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
    }, 500);
  });


// Below are developped for diferent usecase
new Vivus(
        'my_name_logo',
        {
            type: 'delayed',
            duration: 200,
            animTimingFunction: Vivus.EASE
        },
        logoCallback
    );

function logoCallback() {
    var svgElement = $('#my_name_logo');
    setTimeout(function() {
        svgElement.css({
            transition: 'opacity 1s ease',
            opacity: 0
        });
        setTimeout(function() {
            svgElement.css({
                transition: 'opacity 1s ease',
                opacity: 1
            });
            var vivusInstance = new Vivus(
                'my_name_logo', {
                    type: 'delayed',
                    duration: 200,
                    animTimingFunction: Vivus.EASE
                }
            );
            vivusInstance.reset().play();
            logoCallback();
        }, 1000);
    }, 5000);
}
});