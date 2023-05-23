import { useEffect, useState } from "react";
import spotifyLogo from "../assets/link/spotify.svg";

function Spotify() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState("Spotify Playlist");

  useEffect(() => {
    fetch("https://api.qeoqeo.com/spotify/now-playing")
      .then((res) => res.json())
      .then((data: any) => {
        const isPlayingNow = data.data.is_playing;
        setIsPlaying(isPlayingNow);
        if (isPlayingNow) {
          setSong(data.data.item.name);
        }
      });
  }, []);

  return (
    <div className="mb-6 shadow-xl transition ease-in-out hover:scale-105 duration-300">
      <a
        href="https://open.spotify.com/playlist/5UF2oISu3wSUevJlXj0g78"
        target="_blank"
        className="w-full inline-flex items-center justify-center p-3 text-gray-100 rounded-full border border-gray-300 hover:text-white hover:border-white hover:bg-green-800"
      >
        <div className="w-10">
          <img
            className={`rounded-full bg-gray-50 p-1 ${
              isPlaying ? "animate-spin" : "animate-none"
            }`}
            src={spotifyLogo}
            alt="Spotify Playing"
          />
        </div>
        <span className="w-full text-center text-lg font-base tracking-wide">
          {song}
        </span>
        <svg
          aria-hidden="true"
          className="w-6 h-6 ml-3 text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default Spotify;
