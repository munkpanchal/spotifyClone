import React, { useState } from "react";
import Player from "./player/Player";
import MiddleBar from "./MiddleBar";
import { useSelector } from "react-redux";

const MobileBar = () => {
    const mobileCollapsed = useSelector((state) => state.player.mobileCollapse);

    return (
        <div className={`mobile-bar ${mobileCollapsed ? "active" : ""}`}>
            <Player />
            <MiddleBar />
        </div>
    );
};

export default MobileBar;
