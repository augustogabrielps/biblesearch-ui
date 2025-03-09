import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const[bookId, setBookId] = useState('');
    const[chapter, setChapter] = useState('');
    const[verse, setVerse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(bookId, chapter, verse);
    }

return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="number"
        placeholder="Livro (ID)"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Capítulo"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Versículo"
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
