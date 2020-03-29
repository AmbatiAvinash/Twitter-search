import React, { Component } from 'react'
import { TwitterData } from '../Constants/TwitterData';

export class Search extends Component {
    render() {
        const entities = TwitterData.map(x => x.entities);
        const hashtags = entities.map(x => x.hashtags)
        return (
            <div className="search">
                <h3>Recommondations</h3>
                <hr />
                {
                    hashtags && hashtags.flat().slice(1,10).map(hash => (
                        <div>
                            <h5>#{hash.text}</h5>
                        </div>
                    ))
                }
            </div>

        )
    }
}

export default Search
