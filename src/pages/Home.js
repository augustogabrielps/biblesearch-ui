import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>📘 Buscar na Bíblia</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={() => navigate("/search-verse")} style={buttonStyle}>
          🔍 Buscar Verso
        </button>

        <button onClick={() => navigate("/books")} style={buttonStyle}>
          📚 Listar Livros
        </button>

        <button onClick={() => navigate("/keyword-search")} style={buttonStyle}>
          🗝️ Buscar por Palavra
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "15px 25px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#f3f3f3",
  transition: "all 0.2s ease",
};

export default Home;
