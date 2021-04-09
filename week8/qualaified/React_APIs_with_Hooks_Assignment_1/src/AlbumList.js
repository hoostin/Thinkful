import React, { useEffect } from "react";

function AlbumList({ user = {}, albums }) {
  if (Object.entries(user).length !== 0) {
    return (
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
    );
  }
  return <p>Please click on a user name to the left</p>;
}

export default AlbumList;
