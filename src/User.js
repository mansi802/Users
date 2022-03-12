import { useHistory } from "react-router-dom";
import styled from "styled-components";

function User({ user }) {
  const history = useHistory();
  const url = user.url.html_url ? user.url.html_url : "/";

  const onClick = () => {
    window.location.href = url;
    console.log(url);
  };

  return (
    <Container onClick={onClick}>
      <Left>
        <img
          src={`${
            user.avatar_url
              ? user.avatar_url
              : "https://avatars.githubusercontent.com/u/32?v=4"
          }`}
          alt="avatar"
        />
      </Left>
      <Right>
        <h1>{"@" + user.login}</h1>
        <span>{user.type}</span>
      </Right>
    </Container>
  );
}

export default User;

const Container = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 15px;
  padding: 10px 15px;
  background-color: #30363d;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 7px 2px 0px gray;
`;

const Left = styled.div`
  flex: 0.3;

  img {
    width: 100px;
    border-radius: 50%;
  }
`;

const Right = styled.div`
  padding-left: 20px;

  h1 {
    padding-bottom: 5px;
    font-size: 2.2rem;
  }

  span {
    font-size: 1.5rem;
  }
`;
