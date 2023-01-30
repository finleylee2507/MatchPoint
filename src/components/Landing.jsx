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
  if (user && allUsers && allUsers["allUsers"]) {
    const newUserMessage = {
      id: "welcome",
      title: "Welcome to MatchPoint",
      content:
        "Welcome to MatchPoint! MatchPoint lets you seamlessly find open sporting events and sign up for them, allowing you to enjoy your favorite sports activities. Head over to the 'All Events' page now to see what's happening!",
    };

    // const messageKey = getNewMessageKey();
    // console.log("new message is: ");
    // console.log(messageKey);

    if (!allUsers["allUsers"][user.uid]) {
      const newUser = {
        displayName: user.displayName,
        email: user.email,
        unreadMessages: ["welcome"],
        photoURL: user.photoURL,
      };

      addNewUser(newUser, user.uid);
      // addNewMessage(newUserMessage, "welcome");
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
        <ClearDBButton />
      </div>
    </div>
  );
};

export default Landing;
