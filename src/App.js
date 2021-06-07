import ChatFooter from "./ChatFooter";
import "./styles.css";
import ChatMain from "./ChatMain";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div>
        <h3>ЧАТ ТРАНСЛЯЦИИ</h3>
      </div>
      <div className="chatHeaderImg">
        <img
          src="https://youinroll.com/storage/media/ac9ff41aee4b2ebd3ea900551bb2bce6-1.jpg"
          alt="asdfjsdfa"
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="chatWrapper">
        <ChatHeader />
        <div className="chatmain">
          <ChatMain />
        </div>
        <ChatFooter />
      </div>
    </div>
  );
}
