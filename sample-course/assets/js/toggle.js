// Created by Taliesin Smith
// November 2012

// There are actually 2 things new in this script.

//First, the script hides the element that is marked with the answer class inside a parent with the class “toggle.” The css file nolonger does this.

//The second (the big) change is the parent().siblings thing. With this you can structure your html so that the anchor tag is actually inside something else (like a paragraph or a strong tag).

// Use toggle.css to style the look and feel of your question and answer elements. You should be able to style them however you like without messing up the show/hide functionality.

//Get doc ready
$(document).ready(function() {
    //On load, hide the element "answer" that is inside a "toggle"
    $(".toggle .answer").hide();
    //When the anchor inside a "toggle" is clicked.
    $(".toggle a").click(function() {
        //Slide Toggle the parent's sibling which is marked with the class answer. "this" refers to the anchor that is being clicked.
        $(this).parent().siblings(".answer").slideToggle(600);
    });
});
