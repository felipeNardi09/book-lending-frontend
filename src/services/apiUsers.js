export async function signup({ name, email, password, confirmPassword, role }) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/signup`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        role,
      }),
    },
  );

  const data = await res.json();

  if (data.status === "error" || data.status === "fail") {
    throw new Error(data.message);
  }

  return data;
}

export async function login({ email, password }) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/login`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const data = await res.json();

  if (data.status === "error" || data.status === "fail") {
    throw new Error(data.message);
  }

  return data;
}
export async function getLoggedUser(token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/current-user`,
    {
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
export async function logOut(token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/log-out`,
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
export async function updateUser(token, userData) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/update-user`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    },
  );

  const data = await res.json();

  if (data.status === "error" || data.status === "fail") {
    throw new Error(data.message);
  }

  return data;
}
export async function getUsers(token) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  return data;
}
export async function deleteUser(token) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/delete-user`,
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
export async function deleteUserById(token, userId) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/delete-by-id/${userId}`,
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
export async function reactivateAccount({ email, password }) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/users/reactivate-account`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const data = await res.json();

  return data;
}
