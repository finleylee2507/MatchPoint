// Landing Page

import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const LandingLogIn = () => {
  return (
    <Button variant="light" size="lg" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
};

const Landing = () => {
  const user = useAuthState();
  console.log(user);

  return user ? (
    <Navigate to="/allEvents" />
  ) : (
    <div>
      <div>Find open events, join teams, and much more.</div>
      <p>
        MatchPoint lets you seamlessly find open sporting events and sign up for
        them, join teams with your friends, and join leagues with your teams!
      </p>
      <LandingLogIn />
    </div>
  );
};

export default Landing;
