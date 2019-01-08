import React from 'react';
import "./style.css";
import phone from '../imagies/phone.png';
import logo from '../imagies/SoCourt.png';
import arrows from '../imagies/arrows.svg';
import Title from '../imagies/TITLE.png'


class SoCourt extends React.Component {
    render() {
        return (
            <div className="section section-home">

                <div className="section-content">

                    <div className="content">
                        <div className="content-top">
                            <div className="headline">Socourt</div>
                        </div>
                        <div className="content-bottom">
                            <div className="content-bottom-inner">
                                <div className="txt">
                                    The first ever all-in-one product for capturing and sharing hightlighs from sports events.
                                    </div>
                                    <div className="socourt-link">
                                    www.thesocourt.com
                                    </div>
                                <div className="socourt-logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SeocourtHeadline">
                        <div className="SeocourtHeadlineBg">
                            <img src={Title} alt="Title" />
                        </div>
                    </div>
                    
                    <div className="MobilePhone"></div>

                    <div className="arrows">
                        <img src={arrows} alt="arrows" />
                    </div>

                </div>
            </div>
        )
    }
}
export default SoCourt;