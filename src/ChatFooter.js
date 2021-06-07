import "./styles.css";
import EmojiPicker from "./EmojiPicker";
import { useState } from "react";
import axios from "axios";

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-send"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function ChatFooter() {
  const [chatMessage, setChatMessage] = useState("");

  const addEmoji = (emoj) => {
    setChatMessage(chatMessage + emoj);
  };

  const sendData = () => {
    if (/\S/.test(chatMessage)) {
      axios
        .post("https://youinroll.com/message/send?api=1.0", {
          peer_id: "s123",
          message: "Привет как дела?",
          access_token:
            "5ff8764eaed43c545a0fb0fe1220bab4d95c76a961d814896eb44412295ad9c3064b61f6e32854ae77f402f591cc44f3d3d80484f4b984caba86b00af98c8505"
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="chatFooter">
      <div>
        <EmojiPicker addEmoji={addEmoji} />
      </div>
      <input
        className="messageImput"
        placeholder="Сообщение"
        value={chatMessage}
        onChange={(e) => setChatMessage(e.target.value)}
      />
      <div className="messageSend">
        <button className="footerButton" onClick={sendData}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
