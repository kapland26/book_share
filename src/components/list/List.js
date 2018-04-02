import '../../reset.css';
import './List.css';
import React from 'react';
import ListInput from '../listInput/ListInput.js';

function List( props ) {

    let newBook = props.books.map((val, i)=>{
    return(
    
      <div key = {i} >
        <div className="item-container" >
        <img src={val.cover} alt="book cover artwork"/>
        <h2> {val.title} </h2>
        <h3> <b>{val.author}</b> </h3>
        <h3><div className="h4"> Owner: <b>{val.owner}</b> </div></h3>
        <br/>
        <ListInput title={val.title} id={val.id}/>
        </div>
      </div>
    )})

    return (
        
      <div className="List">
      {newBook}
      </div>
    );
}

export default List;