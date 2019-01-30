import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from "react-redux"
import {fetchCats} from "./actions/catActions"
import CatList from './CatList'

class App extends Component {

  componentDidMount(){
    this.props.fetchCats().then(cats => console.log(this.props))
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  // console.log("state to props", state);
  return {catPics: state.cats}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchCats: () => dispatch(fetchCats())}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
