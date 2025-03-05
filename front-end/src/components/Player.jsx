import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Função para formatar o tempo
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

// Função para converter time para segundos
const timeInSeconds = (time) => {
  const [minutes, seconds] = time.split(":");
  return Number(minutes) * 60 + Number(seconds);
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const durationInSeconds = timeInSeconds(duration);

  // Função de play/pause
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  // Reexecuta sempre que o isPlaying mudar
  useEffect(() => {
    let intervalId = null;
    // Atualiza somente se isPlaying for true
    if (isPlaying) {
      // Atualiza o tempo
      intervalId = setInterval(() => {
        setCurrentTime(audioPlayer.current.currentTime);

        // Atualiza a barra
        progressBar.current.style.setProperty(
          "--_progress",
          `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`
        );
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        {/* Botão de voltar */}

        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        {/* Botão de play / pause */}

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        {/* Botão de avançar */}

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
