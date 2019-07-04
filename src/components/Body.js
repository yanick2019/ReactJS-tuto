
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'  ; 


class Block extends Component {
    constructor(props) {
        super(props); /// 必须写 
        this.state = {
            lastClicked: "",
            clickCount: 0,
            showB4: true,
        }
        this.handleClickIndiv = this.handleClick.bind(this);
    }

    handleClick(e) {
        //阻止默认事件 不阻止阻止冒泡
        e.preventDefault();

        this.setState(
            state => ({
                lastClicked: new Date().toLocaleTimeString(),
                clickCount: state.clickCount + 1,  // 不能用 ++
                showB4: !state.showB4,
            })

        )
    }

    render() {
        return (
            // html 里调用的方法 不是class里的方法 而是构造函数constructor里的方法 所以还要让它指向class 里的方法 this.handleClick.bind(this);
            <div onClick={this.handleClickIndiv} style={{ "margin": "10px", "border": "1px solid #ccc " }}>
                <h3>   Block {this.props.title} </h3>
                <p> Block {this.props.content} </p>
                <p>last  clicked: {this.state.lastClicked}</p>
                <p>clickCount: {this.state.clickCount}</p>
                <p>showB4: {this.state.showB4}</p>
            </div>


        )
    }
}



// 条件渲染
class Block4 extends Component {
    render() {

        /* 
      第一种写法
      let element
      if (this.props.show) {
           element = (
               <div style={{ "margin": "10px", "border": "1px solid #ccc " }}>
                   <h3>   Block {this.props.title} </h3>
                   <p> Block {this.props.content} </p>
               </div>
 
           )
       }
       else element = null; */




        // 第二种写法inline condition
        //{ condition && true case }
        //{ condition ? true case : false case  }

        const element = (
            <div style={{ "margin": "10px", "border": "1px solid #ccc " }}>
                <h3>   Block {this.props.title} </h3>
                <p> Block {this.props.content} </p>
            </div>

        )




        return (
            <div>
                {this.props.show ? element : <p> nothing </p>}
            </div>
        )
    }
}




class Block5 extends Component {
    render() {
        return (

            <div className="card mt-2" style={{ width: '50rem' }} >
                循环渲染
                <div className="card-body">
                    <h5 className="card-title">Card title   {this.props.post.title} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

                    <p className="card-text">{this.props.post.content}</p>
                    <a to="#" className="btn btn-primary">Go somewhere</a>
                    <a to="#" className="card-link">Card link</a>
                    <a to="#" className="card-link">Another link</a>
                </div>
            </div>




        )

    }
}





class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownposts: [],
            isLoading: false,
            hasError: false,
            fetchError: ""
        }
    }

    //相当于vuejs 里的mounted 方法
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:3001/posts').then(
            // 简写response=>response.ok
            // 非简写response=>{ return response.json() }

            response => {
                if (response.ok) { return response.json(); } else { throw new Error("this is error throwed " + response.statusText) }

            }
        )
            .then(
                data => this.setState({ ownposts: data, isLoading: false })
            )
            .catch(
                error => {
                    this.setState({ hasError: true, isLoading: false, fetchError: error.toString() });
                    console.log(error.message);

                }
            )


    }
    render() {

        const post = {
            title: "title post ",
            content: "content post Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius "
        }
        // 循环渲染

        let element;

        element = this.state.isLoading ?
            <h4>the page is loading , please   waiting</h4>
            :
            this.state.ownposts.map(
                (post) => (

                    <Block5 key={post.id} post={post} />
                )

            )
            ;
        if (this.state.hasError) {
            element = <h4>Oops , something goes wrong : {this.state.fetchError} </h4>

        }

        return (




            <div   >

                <h2> this is body </h2>

                <br />
                {element}
                <Block title="title 1" content="content 1" />
                {/*  <Block title="title 1" content="content 1" />
                <Block2 title="title 2" content="content 2" />
                <Block3 post={post} />
                <Block4 title="title 4" content="content 4" show={true} /> */}

            </div>

        );



    }
}


function Block2(props) {
    let mystyle = { "margin": 10, "border": "2px solid #ccc ", "padding": 20 }
    return (
        <div style={mystyle}>
            <h3>   Block {props.title} </h3>
            <p> Block {props.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit eos, voluptate dolores necessitatibus perferendis eius ullam culpa aut repellendus iure accusamus expedita! Vero ex, enim nihil inventore rem sed.</p>
        </div>


    )

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



export default Body;


