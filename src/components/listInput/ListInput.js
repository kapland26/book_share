import '../../reset.css';
import './ListInput.css';

import React, {Component} from 'react';
import Button from '../button/Button.js'

class ListInput extends Component {

  constructor(){
    super();

    this.state={
        ownerIn:""
    }

  }

  handleOwnerIn(e){
    this.setState({
        ownerIn: e
    })      
  }


  render() {

    return (
        <div className="ListInput">
          <input  onChange={(e)=>this.handleOwnerIn(e.target.value)} type="text" value={this.state.ownerIn}/>
          <div onClick={()=> this.handleOwnerIn("")}>
          <Button text="Update Owner" id= {this.props.id} owner={this.state.ownerIn} />
          </div>
          <div onClick={()=> this.handleOwnerIn("")}>      
          <Button text="Delete" id= {this.props.id} />
          </div>
        </div>
    );
  }
}

export default ListInput;