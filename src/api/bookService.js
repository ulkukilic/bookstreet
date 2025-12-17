export const fetchBooks = async () => {
  const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=20");
  const data = await response.json();
  
  // Open Library API'den gelen verileri düzenle
  return data.works.map((book, index) => ({
    id: book.key || index,
    title: book.title,
    author: book.authors?.[0]?.name || "Bilinmeyen Yazar",
    category: "Kurgu",
    price: (Math.random() * 100 + 20).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    thumbnail: book.cover_id 
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : "https://via.placeholder.com/150x200?text=Kitap"
  }));
};
