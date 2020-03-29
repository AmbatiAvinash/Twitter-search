import React, { Component } from 'react'
import { TwitterData } from '../Constants/TwitterData';
import { dateConverter } from '../Reusable/DateConverter';


export class Tweets extends Component {
    render() {
        return (
            <div className="tweets">
               {TwitterData && TwitterData.map(user => (
                   <div className="tweets-box">
                       <span>
                       <h3>{user.user.name}</h3>
                       <button className={user && user.user && user.user.follow_request_sent === null ? "btn btn-primary btn-sm" : "btn btn-success btn-sm"}>Follow</button>
                       </span>
                       <h5>@{user.user.screen_name}</h5>
                       <p><strong style={{color: 'darkblue'}}>TWEET: </strong> {user.user.description}</p> 
                       <h5>{dateConverter(user.user.created_at)}</h5>
                       <p className="fa fa-comment" style={{textAlign: 'center', color: 'darkblue'}}><i>{user.text}</i></p>
                       {/* <a href={user.source}>source</a> */}
                       <br/>
                       <span>
                       <p className="fa fa-heart-o">{user.user.favourites_count}</p>
                       <p className="fa fa-user-circle" style={{paddingLeft: '10px'}}>{user && user.user && user.user.followers_count}</p>
                       </span> 
                   </div>
               ))} 

            </div>
        )
    }
}

export default Tweets