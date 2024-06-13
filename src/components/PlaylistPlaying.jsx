import { useEffect, useState } from "react";
import { Playing, Pause } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function PlaylistPlaying({ id }) {
  const { currentMusic, isPlaying } = usePlayerStore((state) => state);

  return (
    <span
      className={`card-play-button rounded-full p-2 transition 
    `}
    >
      {/* <Playing /> */}
      {currentMusic?.playlist.id == id ? <Playing /> : <Pause />}
      {/* <Pause /> */}
      {/* <span>ds</span> */}
    </span>
  );
}
