function Login() {
  const url = "https://academics.newtonschool.co/api/v1/user/login"; // POST // projectId
  const hash = "asdasdsadasdasdas234234wsdwer23rwef";

  // session storage vs Local storage ....
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      login
      {/* This is a login form containing the 2 inputs for email and passwor d */}
      <ul>
        {arr.map((item) => (
          <li key={item}>{item} </li>
        ))}
      </ul>
      <ul>
        {arr.map((item) => (
          <li key={item}>{item} </li>
        ))}
      </ul>
    </>
  );
}

export default Login;
