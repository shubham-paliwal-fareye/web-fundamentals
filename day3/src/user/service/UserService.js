import axios from "axios";

export async function getAllUsers() {
  try {
    const response = await axios.get("/user/user-list");
    return await response;
  } catch (error) {
    return [];
  }
}

export async function createUser(userData) {
  axios
    .post(`/user/add`, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      githubUsername: userData.githubUserName,
    })
    .then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  return await response.json();
}
