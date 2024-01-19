"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import "./episodesgrid.style.css";

export default function EpisodesGrid({ movieId }) {
  const [favMovies, setFavMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [isScale, setIsScale] = useState(true);
  const router = useRouter();

  return (
    <main>
      <div className="episodes-grid">
        {favMovies.map((movie, i) => (
          <a href={`/watch/${movieId}`}>
            <div
              key={i}
              className="single-episode-container"
              style={!isScale ? { transform: "scale(1)" } : null}
            >
              <img
                src="/joker-16-9.jpg"
                className="episode-img"
                style={!isScale ? { filter: "brightness(100%)" } : null}
              />
              <p className="episode-label">Episode {i + 1}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
