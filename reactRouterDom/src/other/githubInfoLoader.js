export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/prabhat8055");
  return responce.json();
};
