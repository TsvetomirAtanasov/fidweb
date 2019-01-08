import React from 'react';
import {SoCourt} from "../SoCourt";
import {SportsGame} from "../SportsGame"
import {HiLites} from "../HiLites";
import {Video} from "../Video";
import {Summary} from '../Summary';
import ReactFullPage from "@fullpage/react-fullpage";

const anchors= [
 "SoCourt",
 "SportsGame",
 "HiLites",
 "Video",
 "Summary"
];

const Scroll = () => (

    <ReactFullPage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
  
        return (
          <div>
            <SoCourt />
            <SportsGame />
            <HiLites />
            <Video />
            <Summary />
          </div>
        );
      }}
    />
  );

  export default Scroll;