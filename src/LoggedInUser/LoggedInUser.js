import React, { Component } from 'react';
import { User } from './LoggedUser';

export const LoggedInUser = () => {
	return (
		<div className="user">
            <div className="card">
                {User && User.map(user => (
                    <div>
                        <h1>{user.name}</h1>
                        <p>@{user.screen_name}</p>
                        <p>{user.location}</p>
                        <p>Followers: {user.followers_count}</p>
                        <p>Friend's count: {user.friends_count}</p>
                        <p>Following: {user.following}</p>
                    </div>
                ))
                
                }
            </div>
        </div>
	);
};

export default LoggedInUser;
