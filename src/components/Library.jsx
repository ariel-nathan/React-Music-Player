import React from "react";
import LibrarySong from "./LibrarySong.jsx";

const Library = ({ songs, setCurrentSong, currentSong, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
