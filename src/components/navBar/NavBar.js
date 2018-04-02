import '../../reset.css'
import './NavBar.css'

import React, { Component } from 'react';
import Button from '../button/Button.js';


class NavBar extends Component {

  constructor(){
    super();

    this.state={
        titleIn: "",
        authorIn: "",
        ownerIn: "",
        searchIn: "",
        searchSelect: ""
    }

    // this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount(){
      this.setState({
          searchSelect: "Author"
      })
  }

  handleTitleIn(e){
    this.setState({
        titleIn: e
    })      
  }
  handleAuthorIn(e){
    this.setState({
        authorIn: e
    })
  }
  handleOwnerIn(e){
    this.setState({
        ownerIn: e
    })
  }
  handleSearchIn(e){
    this.setState({
        searchIn: e
    })
  }
  handleSearchSelect(e){
    this.setState({
        searchSelect: e
    })
  }
  handleClearIns(){
    this.setState({
        titleIn: "",
        authorIn: "",
        ownerIn: "",
    })
  }

  render() {

    return (
        <div className="NavBar">
            <div className="header-container">         
                <div className="title-container">
                    <font color="#0692C3"> B</font>ook<font color="#0692C3">S</font>hare
                    <img src="http://ifef-shemery.org/wp-content/uploads/2016/03/Logo-IFEF-white-Book.png" alt="logo"/>
                </div>
                {/* <div className="logo-container"> <img src="http://ifef-shemery.org/wp-content/uploads/2016/03/Logo-IFEF-white-Book.png" alt="logo" height="200"/> </div> */}
            </div>
            <div className="add-container">
                <div className="add-item" >
                Title: <input onChange={(e)=>this.handleTitleIn(e.target.value)} type="text" value={this.state.titleIn}/>
                </div>
                <div className="add-item" >
                Author: <input onChange={(e)=>this.handleAuthorIn(e.target.value)} type="text" value={this.state.authorIn}/>
                </div>
                <div className="add-item" >
                Owner: <input onChange={(e)=>this.handleOwnerIn(e.target.value)} type="text" value={this.state.ownerIn}/>
                </div>
                <div onClick={()=>{this.handleClearIns("")}} className="add-item">
                    <Button text="Add" title= {this.state.titleIn} author={this.state.authorIn} owner={this.state.ownerIn}/>
                </div>
            </div>
            <div className="search-container">
                <div className="add-item" >
                    <select onClick={(e)=>this.handleSearchSelect(e.target.value)}>
                        <option value="Author">Author</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div className="add-item" >
                    <input onChange={(e)=>this.handleSearchIn(e.target.value)} type="text" value={this.state.searchIn}/>
                </div>
                <div className="add-item">
                    <div onClick={()=> this.handleSearchIn("")}>
                    <Button text="Search" searchSelect= {this.state.searchSelect} searchItem= {this.state.searchIn}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default NavBar;