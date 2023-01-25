// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./Profile.css";

const Profile = ({ allUsers, user, allEvents }) => {
    // console.log(allUsers[user.uid]);
    console.log(user);
    if (user == undefined) {
        return (
            ""
        )
    }

    var currUser = allUsers[user.uid];
    console.log(currUser);

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
}

export default Profile;