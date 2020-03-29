import React, { Component } from 'react'
import { TwitterData } from '../Constants/TwitterData';

export class Search extends Component {
    render() {
        return (
            <div className="search">
                <div class="active-cyan-3 active-cyan-4 mb-4">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                    <hr />
                </div>
            </div>
        )
    }
}

export default Search
