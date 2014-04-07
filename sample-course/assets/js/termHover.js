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
				style: {
					name: 'green'
				}
			});
		}
	}
}