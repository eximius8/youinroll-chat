import "./styles.css";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

function ChatMessage({ author, mseg }) {
  return (
    <div className="chatMsg">
      <div className="chatMsgProfile">
        <a href={author.purl}>
          <img className="chatMsgImg" src={author.imag} alt={author.name} />
        </a>
        <div className="chatMsgDate">{author.name}</div>
      </div>
      <div className="chatMsgContent">
        <div className="chatMsgText">{mseg.text}</div>
      </div>
    </div>
  );
}

export default function ChatMain() {
  const [socketUrl, setSocketUrl] = useState(
    "wss://youinrolltinod.com:15673/ws"
  );
  const messageHistory = useRef([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const msgs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetch("https://youinroll.com/lib/ajax/jitsi/getChat.php?streamId=218")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const author = {
    name: "Никита Вадимович",
    purl: "https://youinroll.com/profile/nikita-vadimovich/1/",
    imag:
      "https://youinroll.com/res.php?src=storage/uploads/916a102143c0f3271b02aec7eb21bb50-1.jpg&amp;q=100&amp;w=40&amp;h=40"
  };
  const mseg = { text: "😎☺️😚😙😊😉😂?" };

  return (
    <>
      {msgs.map((msg) => (
        <ChatMessage key={msg} mseg={mseg} author={author} />
      ))}
    </>
  );
}
