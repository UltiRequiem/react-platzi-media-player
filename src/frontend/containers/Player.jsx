/* eslint-disable react/prop-types,jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '@styles/Player.scss';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

const Player = (props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  const handleBtnBack = () => props.history.goBack();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBtnBack}>
          Return
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = () => {
  getVideoSource;
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
