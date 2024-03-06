import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Home({ userState }) {
  const navigate = useNavigate();

  return (
    <>
      <p>
        Welcome to the ultimate online pizza shop. Use our award winning <i>Pizza Shop™</i> application to order your
        pizzas on your phone or laptop and they magically appear.
      </p>
      <h2>Love it guarantee!</h2>
      <p>
        At the Pizza Shop we always make it right! If we do not deliver a fresh, perfectly cooked, pizza to your device
        in under 500 milliseconds we will bake you another pizza <b>and</b> refund your money.
      </p>
      {userState === 'logged-out' ? (
        <Button onClick={() => navigate('/login')}>Get started</Button>
      ) : (
        <Button onClick={() => navigate('/order')}>Order Now</Button>
      )}
    </>
  );
}
