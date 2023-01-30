// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Profile.css";
import UserAvatar from "./UserAvatar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const UserEventList = ({user, allEvents}) => {
  return user["events"].map((e) => (
    <UserEventCard key={e} event={allEvents[e]} />
  ))
}
const Profile = ({ allUsers, user, allEvents }) => {
  // console.log(user);
  if (user == undefined || allUsers == undefined || allEvents == undefined) {
    return "";
  }
  var realUser = allUsers[user.uid]
  console.log(realUser)

  return (
    <div className="user-profile-container">
      <UserAvatar imgSrc={'https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'}/>
      <p className="user-profile-title">{`Hi, ${realUser.displayName}`}</p>
      <Tabs 
        defaultActiveKey="upcoming"
        className="mb-3"
        >
        <Tab eventKey="upcoming" title="Upcoming">
            <UserEventList user={realUser} allEvents={allEvents}/>
        </Tab>

        <Tab eventKey="past" title="Past">
            
        </Tab>

        <Tab eventKey="notifications" title="Notifications">
            
        </Tab>
        
      </Tabs>
      
    </div>
  )

  // if (allUsers[user.uid]["events"]) {
  //   return (
  //     <UserEventList user={user} allUsers />
  //   )
  // } else {
  //   console.log("no events");
  //   return (
  //     <p className="empty-page-message">You are not a part of any events ...</p>
  //   );
  };

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


export default Profile;
