export const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/book/all");
  
      if (!response.ok) {
        throw new Error("Erro ao buscar livros");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  };
  