import "./App.css";
import { createContext } from "react";
import Questions from "./components/Questions/Questions";

export const TestContext = createContext({});

function App() {

  return (
    <TestContext.Provider value={[]}>
      <Questions />
    </TestContext.Provider>
  );
}

export default App;
