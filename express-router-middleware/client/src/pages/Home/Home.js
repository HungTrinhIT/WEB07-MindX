import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthState/AuthContext";
import { LOG_OUT } from "../../contexts/types";
import actionCreator from "../../utils/actionCreator";
import PageContainer from "../../components/PageContainer/PageContainer";
const Home = (props) => {
  const { dispatch } = useContext(AuthContext);
  const onLogoutHandler = () => {
    const action = actionCreator(LOG_OUT);
    dispatch(action);
    window.location.href = "/login";
  };
  return (
    <PageContainer
      title="Shopping forever | Sale up 50%"
      shouldShowHeader={false}
    >
      <div>
        <h1>Homepage</h1>
        <Button type="primary" onClick={onLogoutHandler}>
          Logout
        </Button>
      </div>
    </PageContainer>
  );
};

export default Home;
