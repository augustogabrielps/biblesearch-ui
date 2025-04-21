import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchVerses } from "../services/fetchVerses";

function SearchVerse() {
  const [verseData, setVerseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (bookId, chapter, verse) => {
    console.log("📢 Fetching verse:", bookId, chapter, verse);
    setLoading(true);
    setError(null);
    setVerseData(null);

    try {
      const data = await fetchVerses(bookId, chapter, verse);

      if (!data) {
        setError("❌ Verse not found. Try other.");
        return;
      }

      setVerseData(data);
    } catch (err) {
      setError("⚠️ Failed to search the verse. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🔍 Verses Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {verseData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <h2>{verseData.bookId} {verseData.chapter}:{verseData.verse}</h2>
          <p>"{verseData.text}"</p>
        </div>
      )}
    </div>
  );
}

export default SearchVerse;
