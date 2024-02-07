import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import './login.css';

Login.propTypes = { setUserState: PropTypes.func };

export function Login({ setUserState }) {
  const navigate = useNavigate();

  function login() {
    setUserState('logged-in');
    navigate('/order');
  }

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={login}>
        <div className='input-group mb-3'>
          <label htmlFor='username' className='input-group-text'>
            @
          </label>
          <input className='form-control' type='text' id='username' placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <label htmlFor='user-password' className='input-group-text'>
            🔒
          </label>
          <input className='form-control' type='password' id='user-password' placeholder='password' />
        </div>
        <button type='button' className='btn btn-primary' onClick={login}>
          Login
        </button>
      </form>
    </>
  );
}
