import { useState } from "react";

function Login() {
  // const [userName, setUserName] = useState("")
  // const [password, setPassword] = useState()

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    appType: "music",
  });

  function handleChange(event) {
    const element = event.target;
    const { name, value } = element;

    setUserInfo((oldInfo) => {
      return {
        ...oldInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!userInfo.email || !userInfo.password) {
      alert("add the password and the login");
      return;
    }

    signIn(userInfo);
  }

  async function signIn(userInfo) {
    var myHeaders = new Headers();
    myHeaders.append("projectId", "8nbih316dv01");
    myHeaders.append("Content-Type", "application/json");

    const url = "https://academics.newtonschool.co/api/v1/user/login";
    var payload = {
      ...userInfo,
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const data = await response.json();

      const { token, data: loginData } = data;
      const { name: userName } = loginData;
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("userInfo", userName);
    } else {
      alert("Password or email is incorrect");
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="username"
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => handleChange(event)}
        />

        <button onClick={() => {}}>Login here!!!</button>
      </form>

      {/* one change to create account  */}

      <p>Hey if you dont have an account create here</p>

      <button type="submit">Sign Up </button>
    </section>
  );
}

export default Login;
