export const fetchJsonPlaceHolder = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  return users;
};
