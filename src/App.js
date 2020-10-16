import React from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import getRoutes from "./routes";
import AuthContext from "./context/auth.context";

class App extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
    this.changeRegistering = this.changeRegistering.bind(this);

    this.state = {
      token: "",
      expires: null,
      roles: [],
      full_name: "",
      email: "",
      user_id: "",
      isAuthenticated: false,
      master_info: {}, //only for master
      registrationIsOpen: false,
    };
  }
  componentWillMount() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
    this.checkLocalStorage();
  }

  async checkLocalStorage() {
    const token = localStorage.getItem("token");
    const expirationString = localStorage.getItem("expires");
    if (expirationString !== null && token !== null) {
      const today = new Date();
      const tokenExpirationDate = new Date(expirationString);
      const isExpired = today > tokenExpirationDate;
      if (isExpired) {
        this.logout();
        // this.props.history.push("/login");
      } else {
        this.login({
          token,
          expires: expirationString,
          roles: JSON.parse(localStorage.getItem("roles")),
          full_name: localStorage.getItem("full_name"),
          email: localStorage.getItem("email"),
          user_id: localStorage.getItem("user_id"),
          master_info: JSON.parse(localStorage.getItem("master_info")),
        });
      }
    } else {
      // this.props.history.push("/login");
      this.logout();
    }
  }
  login({ token, expires, roles, full_name, email, user_id, master_info }) {
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
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("roles", JSON.stringify(roles));
    if (master_info) {
      localStorage.setItem("master_info", JSON.stringify(master_info));
    }
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
    if (!!localStorage.getItem("token")) {
      fetch("/api/v1.0/auth/user/logout", {
        method: "GET",
        body: null,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    }
    localStorage.removeItem("token");
    localStorage.removeItem("expires");
    localStorage.removeItem("roles");
    localStorage.removeItem("full_name");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    localStorage.removeItem("master_info");
    // this.props.history.push("/");
  }
  changeRegistering(value) {
    console.log("changed to", value);
    this.setState({ ...this.state, registrationIsOpen: value });
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
          email: this.state.email,
          login: this.login,
          logout: this.logout,
          changeRegistering: this.changeRegistering,
        }}
      >
        <Header />
        {getRoutes(
          this.state.isAuthenticated,
          this.state.roles,
          this.state.registrationIsOpen
        )}
        <Footer />
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
