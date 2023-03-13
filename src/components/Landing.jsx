// Landing Page

import {
    addNewUser, clearDatabase,
    signInWithGoogle,
    useAuthState,
} from "../utilities/firebase";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./Landing.css";
import Image from "react-bootstrap/Image";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import logo from "../assets/MatchPoint-1.gif";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  return (
    <div className="sign-in-btn-container">
      <Button
        variant="light"
        className="sign-in-button"
        size="lg"
        aria-label="Sign in with google"
        onClick={signInWithGoogle}
      >
        <FcGoogle className="google-icon" />
        <span>Sign in with Google</span>
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

  // // CHANGE UID AND DISPLAYNAME FOR CYPRESS TESTS
  // const user = {
  //   uid: "Faztbt70x8bKPMV3rJzco7fVvEr2",
  //   displayName: "Vedant Apte",
  //   photoURL: "",
  // };

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
      <img className="landing-img1" src={img1} alt="landing page image" />
      <img className="landing-img2" src={img2} alt="landing page image" />
      <img className="landing-img3" src={img3} alt="landing page image" />
      <img className="landing-img4" src={img4} alt="landing page image" />
      <img className="landing-img5" src={img5} alt="landing page image" />
      <img className="landing-img6" src={img6} alt="landing page image" />
      <img className="landing-img7" src={img7} alt="landing page image" />
      <img className="landing-img8" src={img8} alt="landing page image" />
      <div className="col-right">
        <div className="logo-container">
          <Image
            src={logo}
            className="small-logo"
            alt="small MatchPoint app gif logo"
          />
          <h1 className="app-name" data-cy="app-name">
            MatchPoint
          </h1>
        </div>

        <h3 className="blurb">
          We help NU students create or join sporting events that pique their
          interests!
        </h3>
        <SignInButton />
         {/*<ClearDBButton />*/}
      </div>
    </div>
  );
};

export default Landing;
