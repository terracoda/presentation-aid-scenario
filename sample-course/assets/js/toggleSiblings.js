// Created by Taliesin Smith

// Simple jqurey script to create a sliding toggle effect on two siblings.
// This script needs toggle.css file for the full effect.

//Get doc ready
$(document).ready(function() {
	//Click on the <a> inside a parent with the toggle class.
	$(".toggle a").click(function() {
		//Toggle the sibling which is marked with the class answer.
		$(this).next(".toggle .answer").slideToggle(600);
	});
});