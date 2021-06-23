//call the sokcet.io client library
import { io } from "socket.io-client";
const SERVER_HOST = "http://127.0.0.1:8080";

export default function App() {
  // Connected to the socket on the backend (localhost:8080)
  const socket = io(SERVER_HOST);

  socket.on("message", (arg) => {
    console.log(arg);
  });

  return (
    <div className="App">
      <h2>Chat App</h2>
      <form>
        <textarea style={{ width: "500px", height: "100px" }} />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
