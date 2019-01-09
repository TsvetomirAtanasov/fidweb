import React from 'react';
import './style.css';
import sports from '../imagies/sports.png';


class SportsGame extends React.Component {
    render() {
        return (
            <div className="section section-sportsgame">

                <div className="section-content">

                    <div className="content-one">
                        <div className="cell-1">
                            <div class="img-mobile-cell">
                                <img src={sports} alt="sports" />
                            </div>
                        </div>
                        <div className="cell-2">
                            <div className="headline">
                                Sensation
                        </div>
                            <div className="paragraph">
                                Socourt Turns Your Sports Game Into Video Sensation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SportsGame;