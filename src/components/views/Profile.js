import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth, db } from "../services/firebase";

const Profile = () =>
{

    return (
        <div className="Profile">
            This is the Profile page
        </div>
    );
};
Profile.propTypes = {
};

export default Profile;