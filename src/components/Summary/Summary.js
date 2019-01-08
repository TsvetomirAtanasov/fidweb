import React from 'react';
import BestMoments from '../imagies/BestMoments.png'
import './style.css';


class Summary extends React.Component {
    render() {
        return (
            <div className="section section-Summary">

                <div className="section-cont">

                    <div className="box">
                        <div className="box-1">
                            <img src={BestMoments} alt="BestMoments" />
                        </div>
                    </div>
                    
                    <div className="box-2">
                        <div className="Summary">Executive Summary</div>
                        <div className="text-box">
                            Our passion in sport and technology fits in the Socourt product -
                            the.socourt.com. Our vision for making the world a better plase for living and bridging the gap
                            between resident and their local governments is implemented in Az-Kmetat - azkmetat.com.
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

export default Summary;