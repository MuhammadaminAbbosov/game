import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Game from "./Components/Game";
import Todo from "./Components/Todo";

function App() {
  const [data, setData] = useState([])
  return (
    <Wrapper className="App">
      <header className="App-header">
        <h1>GAME</h1>
      </header>

      <Routes>
        <Route path="/" element={<Todo setData={setData} />} />
        <Route path="/game" element={<Game data={data} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  .App-header {
    padding: 13px 60px;

    h1 {
      font-weight: 400;
      font-size: 72px;
      line-height: 156px;
      letter-spacing: 0.1em;

      color: #FFFFFF;

    }
  }
`