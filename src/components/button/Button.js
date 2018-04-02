import '../../reset.css';
import './Button.css';
import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = '/api/books';

class Button extends Component {

    constructor(){
        super();
 
        this.state={

        }
    }

    handleAdd(){
        let body= {
            title: this.props.title,
            author: this.props.author,
            owner: this.props.owner
        }  
        axios.post(baseUrl,body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("This book is not in our database, it is not a real book!");
        });
    }

    
    handleUpdateOwner(){
        console.log("In handle update owner! Owner: "+this.props.owner)
        let body= {
            owner: this.props.owner
        }
        axios.put(baseUrl+"/"+this.props.id, body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleDelete(){
        axios.delete(baseUrl+"/"+this.props.id).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleSearch(){
        let body={}
        switch(this.props.searchSelect){
            case "Author": 
                body = {author: this.props.searchItem}
                break;
            case "Title": 
                body = { title: this.props.searchItem}
                break;
            default:
                break;
        }
        axios.put(baseUrl+"/"+this.props.searchSelect, body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("None of your friends own this book!");
        });
    }

    handleButtonClick(){
        if (this.props.text==="Add"){
            this.handleAdd();
        }else if(this.props.text==="Delete"){
            this.handleDelete();
        }else if(this.props.text==="Update Owner"){
            this.handleUpdateOwner();
        }else if(this.props.text==="Search"){
            this.handleSearch();
        }else{
            console.log("Button has been passed an invalid value!")
        }
    }

    render(){
        return (
        <div className="Button">
            <button onClick={()=>this.handleButtonClick()}>{this.props.text}</button>
        </div>
        );
    }
}

export default Button;