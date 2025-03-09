export const fetchVerses = async (bookId, chapter, verse) => {
    try {
        const response = await fetch('http://localhost:8080/api/bible/{bookId}/{chapter}/{verse}');

        if (!response.ok){
            throw new Error('Failed to fetch verses');
        }

        const data = await response.json();
        return data;
        } catch (error) {
            console.error('Failed to fetch verses', error);
            return null;
        }
    };