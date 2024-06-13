import { useEffect, useState } from "react";
import { Playing } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function PlaylistPlaying({ albumId }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);
  const [isPlayingPlaylist, setIsPlayingPlaylist] = useState(false);

  useEffect(() => {
    setIsPlayingPlaylist(isPlaying && currentMusic?.playlist?.id == albumId);
  }, [isPlaying, currentMusic, albumId]);

  return (
    <span
      className={`card-play-button rounded-full p-2 transition 
    `}
    >
      {isPlayingPlaylist ? <Playing /> : null}
    </span>
  );
}
