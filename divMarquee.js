/**
 * @file divMarquee.js
 * @description This file contains div loop marquee inside div without blank space!
 * @author Haradhan Sharma
 * @license MIT
 * @dependencies jQuery (https://jquery.com/)
 */

$(document).ready(function() {

    /*

    .scrolling-container { // display flex is essential
        transition: left 1s linear;
    }

    .scrolling-content { // child of the scrolling-container
        flex-shrink: 0;
        white-space: nowrap;
    }

     And parent of the scrolling-container should have overflow hidden
    
    */

    // skills marquee =============>

    function setupMarquee(containerId, direction) {
        const container = $('#' + containerId);
        const items = container.find('.scrolling-content');
        const containerWidth = container.width();

        // initial length of the contents 
        let originalWidth = 0;
        items.each(function() {
            originalWidth += $(this).outerWidth();
        });

        // clonign and adding to the the content area
        let totalWidth = 0;
        if (direction === 'left') {
            while (totalWidth < containerWidth) {
                items.each(function() {
                    const clone = $(this).clone(true);
                    container.append(clone);
                    totalWidth += clone.outerWidth();
                });
            }
        } else if (direction === 'right') {
            while (totalWidth < containerWidth) {
                items.each(function() {
                    const clone = $(this).clone(true);
                    container.prepend(clone);
                    totalWidth += clone.outerWidth();
                });
            }
        }

        let scrollPosition = 0;
        function loopMarquee() {

            // defining direction
            if (direction === 'left') {
                scrollPosition -= 0.5;
            } else if (direction === 'right') { // text align to the right essential
                scrollPosition += 0.5;
            }
            
            container.css('transform', `translateX(${scrollPosition}px)`);
            // Will scroll to the original only
            if (direction === 'left' && Math.abs(scrollPosition) >= originalWidth) {
                scrollPosition = 0;
                container.css('transform', `translateX(${scrollPosition}px)`);
            } else if (direction === 'right' && scrollPosition >= originalWidth) {
                scrollPosition = 0;
                container.css('transform', `translateX(${scrollPosition}px)`);
            }
            requestAnimationFrame(loopMarquee);
        }

        loopMarquee();
    }

    // Call the function for each container with their respective direction
    setupMarquee('marqueeContainer', 'left'); // text align to the left essential
    setupMarquee('marqueeContainer2', 'left'); // text align to the left essential
    setupMarquee('marqueeContainer3', 'right'); // text align to the right essential

    // skills marquee =============>


});