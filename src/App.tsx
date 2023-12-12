// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import { Anchor } from "@mantine/core"
import "./App.css";
import '@mantine/core/styles.css';

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="container">
      <Anchor href="/upload">
        Upload
      </Anchor>
    </div>
  );
}

export default App;
