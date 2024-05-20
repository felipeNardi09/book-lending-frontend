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

export async function createBook(
  {
    title,
    genre,
    author,
    synopsis,
    numberOfPages,
    language,
    publisher,
    publicationDate,
    numberOfCopies,
  },
  token,
) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/books/create-book`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },

      body: JSON.stringify({
        title,
        genre,
        author,
        synopsis,
        numberOfPages,
        language,
        publisher,
        publicationDate,
        numberOfCopies,
      }),
    },
  );

  const data = await res.json();

  if (data.status === "error" || data.status === "fail") {
    throw new Error(data.message);
  }

  return data;
}

export async function deleteBook(id) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/books/delete-book/${id}`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();

  if (data.status === "error" || data.status === "fail") {
    throw new Error(data.message);
  }

  return data;
}
