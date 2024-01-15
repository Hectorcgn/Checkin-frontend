export const registerFetch = async (event, navigate) => {
  const form = new FormData(event.target);
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/user/register`,
    {
      credentials: "include",
      method: "POST",
      body: form,
    }
  );

  if (response.ok) {
    const dataJson = response.json();
    const data = JSON.parse(await dataJson);
    sessionStorage.setItem("userId", JSON.stringify(data.id));

    navigate(`/register/${data.id}`);
  }
};

export const createUser = async (event, params, navigate) => {
  const form = new FormData(event.target);
  form.set("id", params);
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/user/createprofile`,
    {
      credentials: "include",
      method: "PUT",
      body: form,
    }
  );
  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("username", JSON.stringify(data));
    navigate("/profile");
  }
};
