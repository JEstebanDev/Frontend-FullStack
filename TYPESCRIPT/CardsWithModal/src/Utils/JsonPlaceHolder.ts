export const fetchJsonPlaceHolder = async () => {
  const ListUser = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((result) => result.json());

  return ListUser;
};

export const fetchDeleteUser = async (id: number) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id,
    {
      method: "DELETE",
    }
  ).then((result) => result.status);

  return response;
};
