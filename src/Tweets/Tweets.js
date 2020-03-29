import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TwitterData } from '../Constants/TwitterData';
import { dateConverter } from '../Reusable/DateConverter';



const mapStateToProps = (state) => {
    return {
        // following : state.following
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        // followUser: () => dispatch({type: 'FOLLOW_USER'})
    }

} 
export class Tweets extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            hashtag : [],
            users: [],
            search: '',
            data: TwitterData,
            followingStatus: false
        }
    }


    searchTweets = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    followUser = () => {

        this.setState({
            followingStatus: !this.state.followingStatus
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
               {userList && userList.map((user)  => (
                   
                   <div className="tweets-box" key = {user.id}>
                       <span>
                       <h3>{user.user.name}</h3>
                       <button 
                            className={"btn btn-primary btn-sm"}
                            onClick = {() => this.followUser(user.id)}
                        >{this.state.followingStatus === false ? 'unfollow' : 'follow'}
                        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);