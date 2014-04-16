/*
 * Author: Stephen J. Read
 *         sjr@mun.ca
 */
var termHover = function(terms) {
	// For each term ID
	for (term in terms) {
		// Ensures that the term isn't inherited from something else
		if (terms.hasOwnProperty(term)) {
			// Get the definition ID
			def = terms[term];

			// Use the text from the definition as the content of the qTip 
			// speech balloon.
			$(term).qtip({
				content: $(def).text(),
				position: { corner: { target: 'leftTop' },
				 			target: 'mouse',
							   adjust: { mouse: true }},
				style: {
				      padding: 5,
				      textAlign: 'left',
				      border: {
				         width: 7,
				         radius: 5,
				      },
					  tip: 'topLeft',
				      name: 'blue' // Inherit the rest of the attributes from the preset dark style
				   }
			});
		}
	}
}