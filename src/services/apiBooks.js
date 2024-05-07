export async function getBooks() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/books`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  return data;
}

export async function getBookById(id) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/books/${id}`,
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  return data;
}
