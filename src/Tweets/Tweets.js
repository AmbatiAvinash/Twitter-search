import React, { Component } from 'react'
import { TwitterData } from '../Constants/TwitterData';
import { dateConverter } from '../Reusable/DateConverter';


export class Tweets extends Component {
    constructor(props){
        super(props);
        this.state = {
            hashtag : [],
            followRequest: Boolean,
            following: '',
            users: [],
            search: ''
        }
    }


    searchTweets = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {

        const userList = TwitterData && TwitterData.filter(
            (user) => {
                return user.user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );
        return (
            <>
            <div className="tweets">
            <div className="active-cyan-3 active-cyan-4 mb-4">
                <input className="form-control" 
                        type="text"
                        onChange = {(e) => this.searchTweets(e)}
                        placeholder="Search with Username"
                        aria-label="Search" />
                <hr />
            </div>
               {userList && userList.map((user,key)  => (
                   
                   <div className="tweets-box" key = {user.id}>
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
            </>
        )
    }
}

export default Tweets