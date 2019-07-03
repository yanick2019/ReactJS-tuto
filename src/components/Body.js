
import React, { Component } from 'react';


class Block extends Component {
    render() {
        return (
            <div style={{ "margin": "10px", "border": "1px solid #ccc " }}>
                <h3>   Block {this.props.title} </h3>
                <p> Block {this.props.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed.</p>
            </div>


        )
    }
}

function Block2(props) {
    let mystyle = { "margin":  10 , "border": "2px solid #ccc ", "padding": 20 }
    return (
        <div style={mystyle}>
            <h3>   Block {props.title} </h3>
            <p> Block {props.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed.</p>
        </div>


    )

}
const post = {
    title: "title post ",
    content: "content post Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius "
}
function Block3({ post }) {

    //如果 参数是 props 里面要写 props.post.title
    let mystyle = { "margin": "10px", "border": "2px solid #ccc ", "padding": "" }
    return (
        <div style={mystyle}>
            <h3>   Block {post.title} </h3>
            <p> Block {post.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed.</p>
        </div>


    )

}

function Body() {
    return (
        <div>
            <h2> this is body </h2>

            <br />

            <Block title="title 1" content="content 1" />
            <Block2 title="title 2" content="content 2" />
            <Block3 post={post} />

        </div>

    );



}
export default Body;


