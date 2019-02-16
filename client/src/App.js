import React, { Component } from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      
        <Nav />
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Books}/>
          <Route path="/books" exact component={Books}/>
          <Route path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
