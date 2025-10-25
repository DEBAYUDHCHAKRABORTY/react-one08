const quoteEndpoint = "http://localhost:9090/api/v1/quotes";

export async function fetchQuotes() {
    try {
        const response = await fetch(quoteEndpoint);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData
        }
    } catch (e) {
        console.error(`Error encountered while fetching quotes: ${e}`);
        throw e;
    }
}

export async function fetchQuotesById(id) {
    try {
        const response = await fetch(`${quoteEndpoint}/${id}`);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData
        }
    } catch (e) {
        console.error(`Error encountered while fetching quotes: ${e}`);
        throw e;
    }
}