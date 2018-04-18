import React, { Component } from 'react';
import './Header.css';

class Heading extends Component {
    render() {
        const {imageUrl,title} = this.props;
        return (
            <header className="primayHeader">
                <img src={imageUrl} className="primaryHeader__heading__image " />
                <span className="primaryHeader__uname ">{title}</span>
            </header>
        );
    }
}

export default Heading;