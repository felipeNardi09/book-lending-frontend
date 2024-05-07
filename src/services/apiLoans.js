export async function retrieveBook(id, token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/loans/retrieve-book/${id}`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        Authorization: token && `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();

  return data;
}

export async function getLoansByUser(token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/loans/user/loans`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: token && `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();

  return data;
}

export async function createLoan(bookId, token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/loans/create-loan/${bookId}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: token && `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();

  return data;
}
export async function getCurrentLoan(id, token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/loans/${id}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: token && `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();

  return data;
}
