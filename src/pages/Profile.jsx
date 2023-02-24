import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';

function Profile({user}) {
    return(
    <>
        <br /><br />
        <h2><b>Username/ID</b>: {user.username}</h2>
        <h2><b>Email</b>: {user.attributes.email}</h2>
    </>
    );

} // <--- Profile() function ends here

export default withAuthenticator(Profile);