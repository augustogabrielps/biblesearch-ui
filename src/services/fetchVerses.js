export const fetchVerses = async (bookId, chapter, verse) => {
    console.log("Calling API:", { bookId, chapter, verse });

    try {
        const response = await fetch(`http://localhost:8080/api/bible/${bookId}/${chapter}/${verse}`);

        console.log("API response:", response);

        if (response.status === 404) {
            console.warn("Verse not found!");
            return null;
        }

        if (!response.ok) {
            throw new Error(`Failed to fetch verse. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API data received:", data);
        return data;
    } catch (error) {
        console.error("Requisition error:", error);
        return null;
    }
};
