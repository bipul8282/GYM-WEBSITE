import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed1 = ({ embedId1 }) => (
    <div className="video-responsive1">
      <iframe className="video2"
        width="853"
        height="600"
        src={`https://www.youtube.com/embed/${embedId1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YoutubeEmbed1.propTypes = {
    embedId1: PropTypes.string.isRequired
  };
  export default YoutubeEmbed1