import { useEffect, useRef, useState } from "react";
import Excalidraw, { exportToBlob } from "@excalidraw/excalidraw";
import savescene from "./savescene";
import axios from "./config";
import "./styles.scss";

function App() {
  const excalidrawRef = useRef(null);
  const [scenes, setScenes] = useState([]);
  const url = window.location.href;
  const idx = url.indexOf("#room=");
  const room = idx !== -1 ? url.substring(idx + "#room=".length) : "default";

  useEffect(() => {
    const onHashChange = () => {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const libraryUrl = hash.get("addLibrary");
      if (libraryUrl) {
        excalidrawRef.current.importLibrary(libraryUrl, hash.get("token"));
      }
    };
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  setInterval(async () => {
    if (excalidrawRef.current) {
      const blob = await exportToBlob({
        elements: excalidrawRef.current.getSceneElements(),
        mimeType: "image/png",
        appState: {
          ...excalidrawRef.current.getAppState(),
          exportWithDarkMode: true,
        },
      });

      savescene(room, blob);
    }
  }, 10000);

  return (
    <>
      <div className="excalidraw-wrapper">
        <Excalidraw
          ref={excalidrawRef}
          theme={"dark"}
          UIOptions={{ canvasActions: { changeViewBackgroundColor: false } }}
        />
      </div>

      <button
        onClick={async () => setScenes((await axios.get("/scenelist")).data)}
      >
        {" "}
        Scene List{" "}
      </button>

      <ul>
        {scenes.map((room) => (
          <li key={room}> {room} </li>
        ))}
      </ul>
    </>
  );
}

export default App;
