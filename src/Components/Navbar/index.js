import React, { Component } from 'react';

class Navbar extends Component {

    render() {

        return (

            <Navbar className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
                <div className="navbar-brand h1 mb-0 text-large font-medium">
                    Online Retail Dashboard
                </div>
                <div className="navbar-nav ml-auto">
                    <div className="user-detail-section">
                        <span className="pr-2">Hi, Sean</span>
                        <span className="img-container">

                            <img src="" className="rounded-circle" alt="user" />
                        </span>
                    </div>
                </div>
            </Navbar>

        )
    }
}


export default Navbar;