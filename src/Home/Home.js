import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="header">
                <span>
                <h3>Hello BBCBreaking</h3> 
                <textarea cols="50" rows="7"></textarea>
                <button className='btn btn-primary'>Tweet </button> 
                </span>
            </div>
        )
    }
}

export default Home
