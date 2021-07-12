import { useEffect, useRef } from "react";
import Excalidraw, { exportToBlob } from "@excalidraw/excalidraw";

import "./styles.scss";

function App() {
  const excalidrawRef = useRef(null);

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

  return (
    <div className="excalidraw-wrapper">
      <Excalidraw ref={excalidrawRef} theme={"dark"} />
    </div>
  );
}

export default App;
