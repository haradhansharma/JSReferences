/**
 * @file loaader.js
 * @description This file contains web page loader before window load, after windows load loader hide.
 * @author Haradhan Sharma
 * @license MIT
 * @dependencies jQuery (https://jquery.com/) CSS ('. loader.css')
 */


$(document).ready(function() {

    function showLoader() {
      $('#loader').removeClass('hidden'); 
      $('#main').addClass('hidden'); 

    }

    function hideLoader() {
      $('#loader').addClass('hidden'); 
      $('#main').removeClass('hidden'); 
    }     
    showLoader();

    // setTimeout(function () {
    //       hideLoader();
    //   }, 2000);

  $(window).on('load', function() {
      hideLoader();
  });
});