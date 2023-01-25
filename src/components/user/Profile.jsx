// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Profile.css";

const Profile = ({ allUsers, user, allEvents }) => {
  console.log(user);
  if (user == undefined || allUsers == undefined || allEvents == undefined) {
    return "";
  }

  const currUser = allUsers[user.uid];

  if ("events" in currUser) {
    return currUser["events"].map((e) => (
      <UserEventCard key={e} event={allEvents[e]} />
    ));
  } else {
    return (
      <p className="empty-page-message">You are not a part of any events ...</p>
    );
  }

  // return (
  //     ("events" in currUser || currUser[events]) ?
  //         <div>
  //             {userEvents = undefined || userEvents.length === 0 ? (
  //                 <p className="empty-page-message">You are not a part of any events ...</p>
  //             ) : (
  //                 userEvents.map((e) => (
  //                     <UserEventCard
  //                         key={e}
  //                         event={allEvents[e]}
  //                     />
  //                 ))
  //             )}
  //         </div>
  //     :
  //     ""
  // )
};

export default Profile;
