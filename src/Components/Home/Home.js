import React    from "react";
import Navbar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

class Home extends React.Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      </div>
    )
  }
}

export default Home;
