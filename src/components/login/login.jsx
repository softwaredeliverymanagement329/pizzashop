import { useNavigate } from "react-router-dom";

export function Login({ setUserState }) {
  const navigate = useNavigate();

  function login() {
    setUserState("logged-in");
    navigate("/order");
  }

  return (
    <>
      <h1> Login</h1>
      <button onClick={login}>Login</button>
    </>
  );
}
