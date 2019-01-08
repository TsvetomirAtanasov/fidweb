import React from "react";
import './style.css';
import hilite from "../imagies/hilite.png";



class HiLites extends React.Component {
    render() {
        return (
            <div className="section section-hilites">
                <div className="section-content">
                      
                      <div id="line"></div>
                    <div className="box-one">
                        <div className="hilites">
                            Hi-Lites
                        </div>
                        <div className="Mobile-App">
                            Mobile App for iOS and Android
                        </div>
                        <div className="text">
                            Socourt let players & fans easlly save videos of the best sports moments right at play, by
                            the click of a button. Hardware specification, design, production and  assembling of the Socourt
                            Cameras. Hardware specification design, production and assembling of the Hi-Lite Button.
                            Informative website, marketing materials & social network channels.
                        </div>
                    </div>
                    <div className="box-two">
                        <div className="photo">
                            <img src={hilite} alt="hilite"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HiLites;