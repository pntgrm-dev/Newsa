import "dotenv/config";

const option = {
    url: process.env.URL,
    key: process.env.NEWS_API_KEY,
    method: "GET",
    json: true
}

export const fetchArticles = async () => {
    try {
        const response = await fetch(option.url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
};