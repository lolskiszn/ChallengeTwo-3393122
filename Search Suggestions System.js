class SearchSuggestionSystem {
    constructor(products) {
        // Sort products lexicographically once
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        let prefix = '';

        for (let char of searchWord) {
            prefix += char;
            const suggestions = [];

            for (let product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                }
                if (suggestions.length === 3) break; // We only need up to 3 suggestions
            }

            result.push(suggestions);
        }

        return result;
    }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));