import React from 'react';

import * as s from 'stylesShared/accent-video.module.scss';

export default function AccentVideo({ videoMP4 }) {
  return (
    <div className={s.content}>
      <video
        autoPlay="autoplay"
        className={s.video}
        loop={true}
        muted={true}
        playsInline={true}
        preload="true"
      >
        <source src={videoMP4} type="video/mp4" />
      </video>
      <div className={s.title}>Gameplay</div>
      <div className={`${s.accent} ${s.accentTop}`}></div>
      <div className={`${s.accent} ${s.accentTop} ${s.accentTop2}`}></div>
      <div className={`${s.accent} ${s.accentBottom}`}></div>
      <div className={s.play}>
        <div className={s.playButton}>
          <div className={s.playHoverOverlay}></div>
          <div className={s.playArrow}></div>
          <div className={`${s.playLine} ${s.playLine1}`}></div>
          <div className={`${s.playLine} ${s.playLine2}`}></div>
          <div className={s.playBox}></div>
        </div>
      </div>
    </div>
  );
}
