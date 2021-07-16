/* eslint-disable react/prop-types */
import React from 'react';
import '@styles/Player.scss';

const Player = (props) => {
  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Return
        </button>
      </div>
    </div>
  );
};

export default Player;
