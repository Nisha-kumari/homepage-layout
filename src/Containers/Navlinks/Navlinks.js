import React, { Component } from 'react';

class Navlinks extends Component {
    render() {
        return (
            <div>
                    {this.props.navList.map((val) =>
                        <a href="" className="layout__col1__nav__link">{val}</a>
                    )}
            </div>
        );
    }
}

export default Navlinks;