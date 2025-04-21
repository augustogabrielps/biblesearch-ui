export const fetchByKeyword = async (query, page = 0, size = 10) => {
    try {
      const response = await fetch(`http://localhost:8080/api/bible/search?query=${query}&page=${page}&size=${size}`);
      
      if (!response.ok) {
        throw new Error("Erro ao buscar por palavra-chave.");
      }
  
      const data = await response.json();
      return data.content ? data.content : data; // caso venha paginado
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  };
  