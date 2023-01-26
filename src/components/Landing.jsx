// Landing Page

import {
  addNewUser,
  signInWithGoogle,
  useAuthState,
} from "../utilities/firebase";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./Landing.css";
import Image from "react-bootstrap/Image";
import appImage from "../assets/app.png";
import smallLogo from "../assets/MatchPoint.png";

const SignInButton = () => {
  return (
    <div className="sign-in-button">
      <Button
        variant="light"
        size="lg"
        aria-label="Sign in"
        onClick={signInWithGoogle}
      >
        Sign In
      </Button>
    </div>
  );
};

const Landing = (allUsers) => {
  const user = useAuthState();
  if (user && allUsers) {
    console.log("user id");
    console.log(user.uid);
    console.log("all users");
    console.log(allUsers);
    console.log("current user");
    console.log(allUsers["allUsers"][user.uid]);

    if (!allUsers["allUsers"][user.uid]) {
      const newUser = {
        displayName: user.displayName,
        email: user.email,
      };

      addNewUser(newUser, user.uid);
    }
  }

  return user ? (
    <Navigate to="/allEvents" />
  ) : (
    <div className="landing-page-container">
      <div className="col-left">
        <Image
          src={appImage}
          className="app-image"
          alt="MatchPoint app image"
        />
      </div>
      <div className="col-right">
        <div className="logo-container">
          <Image
            src={smallLogo}
            className="small-logo"
            alt="small MatchPoint app image"
          />
          <h1 className="app-name">MatchPoint</h1>
        </div>

        <h3>Find open events, join teams, and much more.</h3>
        <p className="blurb">
          MatchPoint lets you seamlessly find open sporting events and sign up
          for them, join teams with your friends, and join leagues with your
          teams!
        </p>
        <SignInButton />
      </div>
    </div>
  );
};

export default Landing;
