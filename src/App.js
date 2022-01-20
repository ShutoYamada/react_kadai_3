import { useState } from "react";
import DisplayTodos from "./components/DisplayTodos";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

function App() {
  const [myCount, setMyCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div style={{ textAlign: "center" }}>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Money Transfer App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          //style={{ backgroundColor: "red" }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos count={myCount} setCount={setMyCount} />
          <DisplayTodos count={myCount} setCount={setMyCount} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
