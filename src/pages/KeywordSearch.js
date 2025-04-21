import { useState } from "react";
import { fetchByKeyword } from "../services/fetchByKeyword";

function KeywordSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Digite uma palavra para buscar.");
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    const data = await fetchByKeyword(query);

    if (!data || data.length === 0) {
      setError("Nenhum versículo encontrado.");
    } else {
      setResults(data);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🗝️ Buscar por Palavra-chave</h2>

      <input
        type="text"
        placeholder="Digite a palavra..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "5px", width: "250px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Buscar</button>

      {loading && <p>⏳ Buscando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {results.map((verse) => (
            <li key={verse.id} style={{ marginBottom: "10px" }}>
              <strong>{verse.bookId} {verse.chapter}:{verse.verse}</strong><br />
              <span>"{verse.text}"</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KeywordSearch;
