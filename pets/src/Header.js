import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>

                        <li><a href='www.harrisonwalkers.com'>Dog Walks</a></li>
                        <li><a href='#'>Photos</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='www.harrisonwalkers.com'>More Info</a></li>
                    </ul>
                </nav>


                {/* <a href="https://imgur.com/cJl4zEB"><img src="https://i.imgur.com/cJl4zEB.png" title="source: imgur.com" /></a> */}
            </div >
        )
    }
}



