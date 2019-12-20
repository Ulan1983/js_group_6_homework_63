import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Posts from "./Containers/Posts/Posts";
import NewPost from "./Containers/NewPost/NewPost";
import Post from "./Containers/Post/Post";
import EditPost from "./Containers/EditPost/EditPost";
import About from "./Containers/About/About";
import Contacts from "./Containers/Contacts/Contacts";


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Posts}/>
            <Route path="/posts/add" component={NewPost}/>
            <Route path="/posts/:id/edit" component={EditPost}/>
            <Route path="/posts/:id" component={Post}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    </BrowserRouter>
  );


export default App;
