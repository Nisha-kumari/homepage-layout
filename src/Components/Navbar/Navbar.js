import React, { Component } from 'react';
import Navlinks from '../../Containers/Navlinks/Navlinks';
import './Navbar.css';

const linkArray = ['Home','About','Services','Process','Contact Us']
class Navbar extends Component {
    render() {
        return (
            <div className="layout__col1">
                <nav className="layout__col1_nav">
                   <Navlinks navList={linkArray}/>
                </nav>
            </div>
        );
    }
}

export default Navbar;