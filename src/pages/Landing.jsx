// File: /src/pages/Landing.jsx

import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';

function Landing({user}) {
    return (
    <>
        <br />
        <h4><b>Landing Page</b></h4>
        <br />
        <h1>Hello, {user.attributes.email}</h1>
    </>
    );
} // <--- Landing() function ends here

export default withAuthenticator(Landing);