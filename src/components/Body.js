
import React, { Component } from 'react';
import { NavLink , Link } from 'react-router-dom';
import axios from 'axios';


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









class Block6 extends Component {
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
        let url = 'http://localhost:3001/posts';
        url = "https://underpowered-barrel.000webhostapp.com/api.php?apikey=getApiKey";
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba1b6b28a764b8c92958d2399239a40';

        const params = {
             /*  headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }, */
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer


        };

// 不适合异步
        fetch(url, params).then(
            // 简写response=>response.ok
            // 非简写response=>{ return response.json() }

            response => {
                if (response.ok) { console.log(response); return response.json(); } else { throw new Error("this is error throwed " + response.statusText) }

            }
        )
            .then(
                data => this.setState({ ownposts: data, isLoading: false }) //这里的data= return response.json(); 来的数据
            )
            .catch(
                error => {
                    this.setState({ hasError: true, isLoading: false, fetchError: error.toString() + " " + url });
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
                <Block title="title 1" content="content 1" />
                <Block2 title="title 2" content="content 2" />
                <Block3 post={post} />
                <Block4 title="title 4" content="content 4" show={true} />

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

/*


author: "Phil Helsel"
content: "Three people were stabbed after Fourth of July fireworks on Chicagos Navy Pier, and 16 people suffered injuries after being trampled, police said.
↵The Navy Pier was so packed with onlookers for the fireworks display Thursday night that the entrance had to be… [+1272 chars]"
description: "Three people were stabbed on Chicago's Navy Pier following Fourth of July fireworks, and more than a dozen people were trampled, police and witnesses said."
publishedAt: "2019-07-05T05:09:00Z"
source: {id: "nbc-news", name: "NBC News"}
title: "3 stabbed, others trampled following fireworks on Chicago's Navy Pier - NBC News"
url: "https://www.nbcnews.com/news/us-news/3-stabbed-others-trampled-following-fireworks-chicago-s-navy-pier-n1026676"
urlToImage: "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"*/



class Block5 extends Component {
    render() {
        return (
            
            <div className="card mt-2" style={{ width: '50rem' }} >
                 <div className="card-body">
                    <h5 className="card-title">Card title   {this.props.post.title} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {this.props.post.author}</h6>

                    <p className="card-text"><img style={{ width: '50%' }} src={this.props.post.urlToImage} alt={this.props.post.title} /> <br/> {this.props.post.description}</p>
                    <p className="card-text">{this.props.post.content}</p>
                    <p className="card-text">Source :   {this.props.post.source.name } </p>
                    <Link to='contact'    className="btn btn-primary">contact</Link>  &nbsp;
                    <NavLink to="product" className="card-link btn btn-primary ">product</NavLink> &nbsp; <br/>
                    <a href={this.props.post.url}    className="  text-primary" target="_blank">{this.props.post.url}</a>  &nbsp;

                    
                 </div>
            </div>

 


        )

    }
}


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: false,
            hasError: false,
            fetchError: "",
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        let url;

        url = 'http://php2010.free.fr/api.php?apikey=getApiKey';
        
 
        axios.get(url)

            // axios.post(url , {} ). axios.get

            .then(res => {

                if (res.status == 200) {
                    /* console.log(res );
                    console.log(res.data); */


                    return res.data;
                }
                else
                {
                    throw new Error("this is error throwed " + res.statusText)
                }



            })
            .then(data => {

                this.setState({ articles: data.articles, isLoading: false });


            })
            .catch(err => { console.log(err) });




    }
    render() {


        // 循环渲染

        let element;
        let page = this.props.match.params.page?this.props.match.params.page:1 ; 
        let pagesize = 3 ; 
        let pagenum =  Math.ceil(this.state.articles.length / pagesize) ;  
        if(page>pagenum) page = pagenum ;
         
        if (this.state.articles.length) {
            element = this.state.isLoading ?
                <h4>the page is loading , please   waiting</h4>
                : this.state.articles.map( function(article, key) {
                    
                    if( key < pagesize ) return (    <Block5 key={key} post={article} />  ) ;
                   
                })
        }


        if (this.state.hasError) {
            element = <h4>Oops , something goes wrong : {this.state.fetchError} </h4>

        }

        return (




            <div>

                <h1> this is body of Home page  </h1>

                <br />
                 {element}  
                {/* <Block title="title 1" content="content 1" />
                <Block title="title 1" content="content 1" />
                <Block2 title="title 2" content="content 2" />
               <Block3 article={article} />
                <Block4 title="title 4" content="content 4" show={true} />*/}

            </div>

        );



    }
}



export default Body;


