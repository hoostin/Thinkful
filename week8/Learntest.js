function App () {
  const [userId, setUserID] = useState(1)

  const userIds = [1, 2, 3, 4]

  return (
    <div className="App">
      {userIds.map(id => <button key={id} onClick={() => setUserID(id)}>User ID {id}</button>)}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId}/>
    </div>
  );
}

// In ProfileEdit.js

function ProfileEdit({ userID }) {  // Added `userID` as a prop
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      // Delay the response time by 1 second using slowwly.robertomurray.co.uk
      const response = await fetch(
        `http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/users/${userID}`
      )
      const userFromAPI = await response.json()
      setUser(userFromAPI);
    }

    loadUser()
  }, [userID]);  // <-- Added dependency on `userID`

  ... // Omitted for brevity
}