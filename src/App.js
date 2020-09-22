import React from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import getRoutes from "./routes";
import AuthContext from "./context/auth.context";

class App extends React.Component {
  constructor(props) {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      token: "",
      expires: null,
      roles: [],
      full_name: "",
      email: "",
      user_id: "",
      isAuthenticated: false,
      master_info: {}, //only for master
    };
  }
  login({ token, expires, roles, full_name, email, user_id }) {
    this.setState({
      ...this.state,
      token,
      expires,
      roles,
      full_name,
      email,
      user_id,
      isAuthenticated: true,
    });
    localStorage.setItem("token", token);
    localStorage.setItem("expires", expires);
    localStorage.setItem("full_name", full_name);
    localStorage.setItem("email", email);
  }
  logout() {
    this.setState({
      token: "",
      expires: null,
      roles: [],
      full_name: "",
      email: "",
      user_id: "",
      isAuthenticated: false,
      master_info: {}, //only for master
    });
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          token: this.state.token,
          roles: this.state.roles,
          full_name: this.state.full_name,
          isAuthenticated: this.state.isAuthenticated,
          master_info: this.state.master_info,
          login: this.login,
          logout: this.logout,
        }}
      >
        <Header />
        {getRoutes(false)}
        <Footer />
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
