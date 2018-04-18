import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="primaryFooter">
                <span className=""> {'\u00A9'} Razorthink inc.</span>
            </footer>
        );
    }
}

export default Footer;