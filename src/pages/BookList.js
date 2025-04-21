import { useEffect, useState } from "react";
import { fetchBooks } from "../services/fetchBooks";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();

      if (!data) {
        setError("Erro ao carregar os livros.");
      } else {
        setBooks(data);
      }

      setLoading(false);
    };

    loadBooks();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>📚 Lista de Livros da Bíblia</h2>

      {loading && <p>⏳ Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map(book => (
          <li key={book.id}>📖 {book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
