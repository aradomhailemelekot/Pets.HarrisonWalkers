import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="Header">
                    <a href='www.harrisonwalkers.com'>Dog Walks</a>
                    <br>
                    </br>
                    <a href='#'>More Dog Photos</a>
                </nav>
                <header className="Header">
                    Pet stuff rendering in Header!
                </header>

                {/* <a href="https://imgur.com/cJl4zEB"><img src="https://i.imgur.com/cJl4zEB.png" title="source: imgur.com" /></a> */}
            </div >
        )
    }
}



