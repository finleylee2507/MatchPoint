// Landing Page

import {
  addNewUser,
  clearDatabase,
  getNewMessageKey,
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

const ClearDBButton = () => {
  return (
    <button className="btn btn-dark" onClick={clearDatabase}>
      Clear Database
    </button>
  );
};

const Landing = (allUsers) => {
  const user = useAuthState();
  if (user && allUsers && allUsers["allUsers"] && allUsers["allUsers"]) {
    if (!allUsers["allUsers"][user.uid]) {
      const newUser = {
        displayName: user.displayName,
        email: user.email,
        unreadMessages: ["welcome"],
        photoURL: user.photoURL,
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

        <h3>Find open events, create events, and much more.</h3>
        <p className="blurb">
          Lookin' to get out of the house and knock the ball around? Wanna shoot
          some hoops? MatchPoint is a seamless platform that allows you to
          create or join sporting events that pique your interests! All levels
          are welcome!
        </p>
        <SignInButton />
        <ClearDBButton />
      </div>
    </div>
  );
};

export default Landing;
