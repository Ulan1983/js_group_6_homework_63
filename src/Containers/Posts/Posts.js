import React, {Component, Fragment} from 'react';
import Header from "../../Components/Header/Header";
import axiosPosts from "../../axios-posts";
import './Posts.css';
import {NavLink} from "react-router-dom";

class Posts extends Component {
	state = {
		posts: [],
	};

	async componentDidMount() {
		const response = await axiosPosts.get('/posts.json');

		if (response.data) {
			this.setState({posts: response.data});
		}
	}
	render() {
		return (
			<Fragment>
				<Header/>
				<div className="posts">
					{Object.keys(this.state.posts).map(id => (
						<div className="card" key={id}>
							<p> <b>Created on:</b> {this.state.posts[id].date}</p>
							<p><b>Title: </b> {this.state.posts[id].title}</p>
							<NavLink to={"/posts/" + id}>Read more >></NavLink>
						</div>
					))}
				</div>
			</Fragment>
		);
	}
}

export default Posts;