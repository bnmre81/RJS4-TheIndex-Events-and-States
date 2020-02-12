import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };

  render() {
    let x;
    if (this.state.currentAuthor) {
      x = <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      x = <AuthorList authors={authors} selectAuthor={this.selectAuthor} />;
    }
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{x}</div>
        </div>
      </div>
    );
  }
}

export default App;
