import React, { Component } from 'react';
import './AsideBar.css';

class AsideBar extends Component {
    render () {
        const {htmlImg, cssImg} = this.props;
        return (
            <div className="layout__col2__subcol2">
                <div className="imageWrapper"><img src={htmlImg} alt="" className="html5Image" /></div>
                <div className="imageWrapper"><img src={cssImg} alt="" className="css3Image"/></div>
            </div>
        );
    }
}

export default AsideBar;