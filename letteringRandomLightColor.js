/**
 * @file letteringRandomLightColor.js
 * @description This file contains code that apply random color to the lettering span automatically with random color.
 * @author Haradhan Sharma
 * @license MIT
 * @dependencies letteringjs (https://letteringjs.com/) animate.css (https://animate.style/)
 */

$(document).ready(function() {
    // lettering settings ============>

    // Chaining with lettering()
    $("#job-title h1").lettering('words').children("span").lettering();

    function getRandomColor() {
        // Loop until a suitable color is generated
        while (true) {
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
          }
          
          // Check for brightness using a weighted random selection
          const weights = { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 6, '8': 5, '9': 4, 'A': 3, 'B': 2, 'C': 1, 'D': 0, 'E': 0, 'F': 0 };
          let brightness = 0;
          for (let char of color.substring(1)) {
            brightness += weights[char];
          }

          // Adjust threshold to ensure brightness is above a certain value
          const threshold = 30; // Experiment with different threshold values
          if (brightness > threshold) {
            return color;
          }
        }
      }

    // Apply random color to each word
    $("#job-title h1").find("[class^='word']").each(function(){
      $(this).css({
        color: getRandomColor()
        });
    });
    
    // Apply random color to each character
    $("#job-title h1").find("[class^='char']").each(function(){
        // Apply effect from Animate.css
        $(this).addClass('d-inline-block animate__animated animate__fadeInLeft');
        // applying random color and some other css effect
        $(this).css({
            color: getRandomColor(),
            // 'text-shadow': '1px 1px 1px #000, 0 0 0.05em #fff',
            'transform': 'rotate(-3deg) skew(-15deg)',
            'transform-style': 'preserve-3d',
            'font-family': 'Aldrich, sans-serif',
            '--animate-duration': '10s'
        });
    });
    // lettering settings ============>   
});