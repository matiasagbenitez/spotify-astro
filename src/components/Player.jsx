import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";

export const Randomize = ({ className, color = "#fafafa" }) => (
  <svg
    className={className}
    fill={color}
    width="16"
    height="16"
    viewBox="0 0 32.00 32.00"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    stroke-width="0.00032"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="#CCCCCC"
      stroke-width="0.128"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>random</title>{" "}
      <path d="M0 24q0 0.832 0.576 1.44t1.44 0.576h1.984q2.048 0 3.904-0.8t3.168-2.144 2.144-3.2 0.8-3.872q0-2.464 1.728-4.224t4.256-1.76h4v1.984q0 0.672 0.384 1.152t0.864 0.704 1.12 0.128 1.056-0.544l4-4q0.608-0.64 0.576-1.44t-0.576-1.408l-4-4q-0.48-0.448-1.088-0.544t-1.12 0.128-0.864 0.704-0.352 1.12v2.016h-4q-2.016 0-3.872 0.8t-3.2 2.112-2.144 3.2-0.768 3.872q0 2.496-1.76 4.256t-4.256 1.76h-1.984q-0.832 0-1.44 0.576t-0.576 1.408zM0 8.032q0 0.832 0.576 1.408t1.44 0.576h1.984q1.408 0 2.592 0.608t2.080 1.664q0.672-2.048 1.984-3.68-2.912-2.592-6.656-2.592h-1.984q-0.832 0-1.44 0.608t-0.576 1.408zM13.376 23.456q2.848 2.56 6.624 2.56h4v2.016q0 0.64 0.384 1.152t0.864 0.704 1.12 0.096 1.056-0.544l4-4q0.608-0.608 0.576-1.44t-0.576-1.376l-4-4q-0.48-0.48-1.088-0.576t-1.12 0.128-0.864 0.736-0.352 1.12v1.984h-4q-1.376 0-2.592-0.576t-2.048-1.664q-0.704 2.048-1.984 3.68z"></path>{" "}
    </g>
  </svg>
);

export const Repeat = ({ className, color = "#fafafa" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M14 7H15.9992C19.3129 7 21.9992 9.68629 21.9992 13C21.9992 16.3137 19.3129 19 15.9992 19H8C4.68629 19 2 16.3137 2 13C2 9.68629 4.68629 7 8 7H10M7 4L10 7M10 7L7 10"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

export const Previous = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="icon icon-tabler icons-tabler-filled icon-tabler-player-track-prev"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
    <path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
  </svg>
);

export const Next = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="icon icon-tabler icons-tabler-filled icon-tabler-player-track-next"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
    <path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
  </svg>
);

export const Playing = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="3" width="2" height="10">
      <animate
        attributeName="height"
        values="10;2;10"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="3;9;3"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="5" y="3" width="2" height="10">
      <animate
        attributeName="height"
        values="10;6;10"
        dur="1s"
        repeatCount="indefinite"
        begin="0.2s"
      />
      <animate
        attributeName="y"
        values="3;7;3"
        dur="1s"
        repeatCount="indefinite"
        begin="0.2s"
      />
    </rect>
    <rect x="9" y="3" width="2" height="10">
      <animate
        attributeName="height"
        values="10;2;10"
        dur="1s"
        repeatCount="indefinite"
        begin="0.4s"
      />
      <animate
        attributeName="y"
        values="3;9;3"
        dur="1s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </rect>
    <rect x="13" y="3" width="2" height="10">
      <animate
        attributeName="height"
        values="10;6;10"
        dur="1s"
        repeatCount="indefinite"
        begin="0.6s"
      />
      <animate
        attributeName="y"
        values="3;7;3"
        dur="1s"
        repeatCount="indefinite"
        begin="0.6s"
      />
    </rect>
  </svg>
);

export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center gap-x-2">
      <button
        className="opacity-70 hover:opacity-100 transition"
        onClick={handleClickVolumen}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[100px]"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

const SongControl = ({ audio, nextSong, repeat }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio.current.currentTime);
    };

    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  const handleNextSong = () => {
    if (repeat) {
      audio.current.currentTime = 0;
      audio.current.play();
    } else {
      nextSong();
    }
  };

  useEffect(() => {
    audio.current.addEventListener("ended", handleNextSong);

    return () => {
      audio.current.removeEventListener("ended", handleNextSong);
    };
  }, [audio, repeat, nextSong]);

  const formatTime = (time) => {
    if (time == null) return `0:00`;

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">
        {formatTime(currentTime)}
      </span>

      <Slider
        value={[currentTime]}
        max={duration}
        min={0}
        className="w-[400px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }}
      />

      <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
};

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className={`flex items-center gap-4 relative overflow-hidden`}>
      <picture className="w-16 h-16 rounded-md shadow-lg overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

export function Player() {
  const [firstMount, setFirstMount] = useState(true);
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic, volume } =
    usePlayerStore((state) => state);
  const audioRef = useRef();
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // Random music at the beginning
  useEffect(() => {
    fetch("/api/get-info-playlist.json?id=1")
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setCurrentMusic({ playlist, songs, song: songs[0] });
        setFirstMount(false);
      });
  }, []);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      if (!firstMount) {
        audioRef.current.play();
      }
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const { song, songs } = currentMusic;
    const index = songs.findIndex((s) => s.id === song.id);
    const previousSong = songs[index - 1];
    if (previousSong) {
      setCurrentMusic({ ...currentMusic, song: previousSong });
    }
  };

  const handleNext = () => {
    const { song, songs } = currentMusic;
    if (isRandom) {
      let newSong = song;
      while (newSong.id === song.id) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        newSong = songs[randomIndex];
      }
      setCurrentMusic({ ...currentMusic, song: newSong });
    } else {
      const index = songs.findIndex((s) => s.id === song.id);
      const nextSong = songs[index + 1];
      if (nextSong) {
        setCurrentMusic({ ...currentMusic, song: nextSong });
      } else {
        setCurrentMusic({ ...currentMusic, song: songs[0] });
      }
    }
  };

  const handleRandom = () => {
    setIsRandom(!isRandom);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  return (
    <div className="flex flex-row justify-between w-full py-2 px-8 z-50">
      <div className="w-72">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-center gap-x-3">
            <button
              title="Orden aleatorio"
              className="p-2 opacity-70 hover:opacity-100 transition"
              onClick={handleRepeat}
            >
              <Repeat color={isRepeat ? "#1ED760" : "#fafafa"} />
            </button>
            <button
              title="Canción anterior"
              className="p-2 opacity-70 hover:opacity-100 transition"
              onClick={handlePrevious}
            >
              <Previous />
            </button>
            <button className="bg-white rounded-full p-3" onClick={handleClick}>
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button
              title="Canción siguiente"
              className="p-2 opacity-70 hover:opacity-100 transition"
              onClick={handleNext}
            >
              <Next />
            </button>
            <button
              title="Activar repetición"
              className="p-2 opacity-70 hover:opacity-100 transition"
              onClick={handleRandom}
            >
              <Randomize color={isRandom ? "#1ED760" : "#fafafa"} />
            </button>
          </div>
          <SongControl
            audio={audioRef}
            nextSong={handleNext}
            repeat={isRepeat}
          />
          <audio ref={audioRef} />
        </div>
      </div>
      <div className="w-72 flex items-center justify-end">
        <VolumeControl />
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
