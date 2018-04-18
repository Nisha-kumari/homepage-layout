import React, { Component } from 'react';
import data from '../../Pages/HomePage/content.json';
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import AsideBar from '../../Components/AsideBar/AsideBar';
import Navbar from '../../Components/Navbar/Navbar';
import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
            <div className="layoutWrapper">
                <Navbar />
                <div className="layout__col2__wrapper">
                    <div className="layout__col2__subcol1 ">
                        <div className="layout__col2__heading">
                            <span>
                                Welcome to Razorthink
                            </span>
                        </div>
                        {data.map((paraContent)=>
                            <p className="layout__col2_paragraph">{paraContent.paragraph}
                            </p>
                        )}
                    </div>
                    <AsideBar
                        htmlImg = {html5}
                        cssImg = {css3}
                    />

                </div>

            </div>

        );
    }
}

export default MainContent;