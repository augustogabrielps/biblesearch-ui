import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchVerse from "./pages/SearchVerse";
import BookList from "./pages/BookList";
import KeywordSearch from "./pages/KeywordSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-verse" element={<SearchVerse />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/keyword-search" element={<KeywordSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
