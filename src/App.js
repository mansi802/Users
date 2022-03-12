import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/srijanDubey/chitkara-test-api-mock/main/data.json"
    );
    const res = await data.json();
    setUsers(res.data);
    // console.log(res.data);
  };

  return (
    <Users className="App">
      {users?.map((curr) => (
        <User user={curr} key={curr.id} />
      ))}
    </Users>
  );
}

export default App;

const Users = styled.div`
  padding: 25px 40px;
  display: grid;
  column-count: 1;
  grid-template-columns: 1fr;
  column-gap: 25px;
  row-gap: 30px;

  margin: auto;
  margin-top: 25px;

  @media (min-width: 768px) {
    column-count: 3;
    max-width: 1000px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
