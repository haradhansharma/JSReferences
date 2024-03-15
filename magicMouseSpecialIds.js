/**
 * @file magicMouseSpecialIds.js
 * @description This file contains some special effect of ID size.
 * @author Haradhan Sharma
 * @license MIT
 * @dependencies magicmouse.js (https://magicmousejs.web.app/)
 */

$(document).ready(function() {
    // magic mouse settings start ===============>
    var mm_options = {
            "outerStyle": "circle",
            "hoverEffect": "pointer-overlay",
            "hoverItemMove": false,
            "defaultCursor": false,
            "outerWidth": 60,
            "outerHeight": 60
        };

    magicMouse(mm_options);

    $(".magic-hover").each(function(){
        // altering default pointer
        $('#magicPointer').css({
            transition : "transform 0.5s, width 0.5s, height 0.5s, border-radius 0.5s", 
            background : "red" 
        });

        // resetting to the default for background color
        $(this).on('mouseenter', function(){
            $('#magicPointer').css({
                background : "#fff" 
            });
        });

        // going to the the altering for background
        $(this).on('mouseleave', function(){
            $('#magicPointer').css({
                background : "red" 
            });
        });
    });

    function changeMouseSize(eL) {     
        var specialeffect = $(eL);
        var specialeffectWidthHalf = specialeffect.width() / 2;
        var magicPointer = $('#magicPointer');
     
        // altering the original size based on eL
        specialeffect.on('mouseenter', function() {    
            magicPointer.css({
                width: (specialeffectWidthHalf - 10) + "px",
                height: (specialeffectWidthHalf - 10) + "px",           
            });
            
        });
        // resetting default size
        specialeffect.on('mouseleave', function() {     
            magicPointer.css({
                width: "",
                height: "",            
            });
        });
    };
 
    // toggling for each specialeffect div size
    $('.specialeffect').each(function() {
        changeMouseSize($(this));
    });

    function setCardEffectMagicMouse(eL) {   
        var card = eL;
        var mouseHover = false;
        var mousePosition = { x: 0, y: 0 };
        var cardSize = { width: 0, height: 0 };
        var SCALE_X = 4;
        var SCALE_Y = 8;

        card.blur(function() {
            mouseHover = false;
        });

        card.focus(function() {
            mouseHover = true;
        });

        card.mousemove(function(e) {
            if (!mouseHover) return;
            var rect = card[0].getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            mousePosition = { x, y };
            cardSize = {
                width: card[0].offsetWidth || 0,
                height: card[0].offsetHeight || 0,
            };
            card.css({
                'transition': 'transform 0.4s ease', 
                'transform': 'perspective(1000px) rotateX(' + ((mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y) + 'deg) rotateY(' + ((mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X) + 'deg) translateZ(10px)'
                });
        });

        card.mouseout(function() {
            mouseHover = false;
            card.css('transform', 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
        });

        card.mouseover(function() {
            mouseHover = true;
        });
    }
    

    $('.cardeffectEx').each(function() {
        setCardEffectMagicMouse($(this));
    });

});
    

/// Below are some working code kept for reference to use in diferent case which are tested to develop above code

// mm_options = {
//     "outerStyle": "circle",
//     "hoverEffect": "pointer-overlay",
//     "hoverItemMove": false,
//     "defaultCursor": false,
//     "outerWidth": 60,
//     "outerHeight": 60
//     };
// magicMouse(mm_options);   
// var specialeffect = document.getElementById('specialeffect');
// var specialeffectWidthHalf = specialeffect.offsetWidth / 2; 

// specialeffect.addEventListener('mouseenter', function() {   

  // mm_options.outerWidth = specialeffectWidthHalf;
  // mm_options.outerHeight = specialeffectWidthHalf;
  // magicMouse(mm_options);  
  
  // Update custom mouse cursor size
  // var magicCustomCursor = document.querySelector('#magicMouseCursor');
  // magicCustomCursor.style.width = (specialeffectWidthHalf) + "px";
  // magicCustomCursor.style.height = (specialeffectWidthHalf) + "px";

  // Update custom pointer size
  // var magicPointer = document.querySelector('#magicPointer');
  // magicPointer.style.width = (specialeffectWidthHalf - 10) + "px";
  // magicPointer.style.height = (specialeffectWidthHalf - 10) + "px";
  // magicPointer.style.backgroundColor = '#ed370c';
// });

// specialeffect.addEventListener('mouseleave', function() { 

  // mm_options.outerWidth = 60;
  // mm_options.outerHeight = 60;
  // magicMouse(mm_options);  

  // Update custom mouse cursor size
  // var magicCustomCursor = document.querySelector('#magicMouseCursor');
  // magicCustomCursor.style.width = "";
  // magicCustomCursor.style.height = "";

  // Update custom pointer size
  // var magicPointer = document.querySelector('#magicPointer');
  // magicPointer.style.width = "";
  // magicPointer.style.height = "";
  // magicPointer.style.backgroundColor = '#fff';
// });
