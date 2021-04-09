import React, { useEffect, useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const title = document.title;
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
  useEffect(() => {
    document.title = "Awesome Album App";
    console.log(document.title);
    const abortController = new AbortController();
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: abortController.signal }
        );
        const responseRead = await response.json();

        setUsers(responseRead);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadUsers();
    return () => {
      document.title = title;
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadAlbum() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${currentUser.id}`,
          { signal: abortController.signal }
        );
        const theAlbums = await response.json();
        setAlbums(theAlbums);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadAlbum();
    return () => {
      abortController.abort();
    };
  }, [currentUser]);
  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} albums={albums} />
      </div>
    </div>
  );
}

export default App;
