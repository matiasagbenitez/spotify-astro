import { Pause, Play, Playing } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function SongPlayButton({ id, albumId, size = "small" }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == albumId;
    const isPlayingSong = isPlaying && isPlayingPlaylist && currentMusic?.song.id == id;

  const handleClick = () => {
    if (isPlayingPlaylist && isPlayingSong) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-song.json?id=${id}&albumId=${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        const { song, songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song });
      });
  };

  const iconClassName = size === "small" ? "w-2 h-2" : "w-3 h-3";

  return (
    <button
      onClick={handleClick}
      className={`card-play-button rounded-full p-2 transition 
      ${
        isPlayingSong
          ? "bg-green-500 hover:bg-green-400"
          : "hover:bg-green-500 hover:scale-[1.1]"
      }
      ${isPlayingSong ? "" : "opacity-0 hover:opacity-100"}
    `}
    >
      {isPlayingSong ? (
        <Pause className={iconClassName} />
        // <Playing className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
