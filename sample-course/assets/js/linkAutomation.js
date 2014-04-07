// Created by Cathy Wicks
// Modified by Cathy Wicks - May 30, 2011 (search href for 'containing (*)' references instead of 'ends with ($)' as d2L adds additional parameters to ends.

// Simple jquery scripts to automate application of various class attributes 
// (a.external, a.txt, a.rtf, a.doc, a.pdf, a.external_pdf, a.ppt, a.flash, a.ereserve, a.email, a.youtube, a.tv)

//Get doc ready
$(document).ready(function () {

	//TXT: finds all <a> tags referencing .txt and adds "txt" class
    $("a[href*='.txt']").addClass("txt");

    //RTF: finds all <a> tags referencing .rtf and adds "rtf" class
    $("a[href*='.rtf']").addClass("rtf");

    //DOC: finds all <a> tags referencing .doc or .docx and adds "doc" class
    $("a[href*='.doc'], a[href*='.docx']").addClass("doc");

    //PDF: finds all <a> tags referencing .pdf and adds "pdf" class
    $("a[href*='.pdf']").addClass("pdf");

    //EXTERNAL_PDF: finds all <a> tags referencing external (includes http, https or www.) .pdf and adds "external_pdf" class
    $("a[href*='.pdf'][href*='http:'], a[href*='.pdf'][href*='https:'], a[href*='.pdf'][href*='www.']").addClass("external_pdf");

    //PPT: finds all <a> tags referencing .ppt, .pptx, .pps, or .ppsx and adds "ppt" class
    $("a[href*='.ppt'], a[href*='.pptx'], a[href*='.pps'], a[href*='.ppsx']").addClass("ppt");

    //FLASH: finds all <a> tags referencing .swf and adds "flash" class
    $("a[href*='.swf']").addClass("flash");

    //ERESERVE: finds all <a> tags referencing eReserves and adds "ereserve" class
    $("a[href*='info.library.mun.ca']").addClass("ereserve");

    //EMAIL: finds all <a> tags referencing mailto: and adds "email" class
    $("a[href*='mailto:']").addClass("email");

    //YOUTUBE: finds all <a> tags referencing youtube and adds "youtube" class
    $("a[href*='youtube'], a[href*='youtu.be']").addClass("youtube");

    //TV: finds all <a> tags referencing .mov or .wmv and adds "tv" class
    $("a[href*='.mov'], a[href*='.wmv']").addClass("tv");
	
	//EXTERNAL: finds all <a> tags referencing external (includes http, https or www.) sites that are not documents or ereserves and adds "external" class
    $("a[href*='http:'], a[href*='https:'], a[href*='www.']").not(".txt, .rtf, .doc, .pdf, .external_pdf, .ppt, .flash, .ereserve, .email, .youtube, .tv").addClass("external");
	
	//EXTERNAL: finds all <a> tags that are documents, ereserves or external links and adds target="_blank" attribute	
	$("a").filter(".external, .txt, .rtf, .doc, .pdf, .external_pdf, .ppt, .flash, .ereserve, .email, .youtube, .tv").attr('target', '_blank');
    
});

