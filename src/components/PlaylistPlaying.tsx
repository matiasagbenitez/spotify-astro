import { useEffect, useState } from "react";
import { Playing } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

interface PlaylistPlayingProps {
  albumId: number | string;
}

export function PlaylistPlaying({ albumId }: PlaylistPlayingProps) {
  const { currentMusic, isPlaying } = usePlayerStore((state) => state);
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
