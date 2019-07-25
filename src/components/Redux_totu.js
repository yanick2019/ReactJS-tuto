import React, { Component } from 'react';
// import store from "../Store";
import { connect } from "react-redux";
import * as Action from '../Action';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // count: store.getState(),

        }
    }

    handleIncrement = (e) => {
        // this.props.dispatch(Action.increment());
        // store.dispatch(Action.increment())
        // store.dispatch(Action.increment())
        //  console.log(e.target.innerHTML)

        // this.onIncrement();
        /*    this.setState({
               count: store.getState(),
   
           }) */
    }

    handleDecrement = () => {
        // this.props.dispatch(Action.decrement());
        // store.dispatch(Action.decrement());
        // this.onDecrement();
        /*  this.setState({
             count: store.getState()
         }) */
    }

    /*  onIncrement = () => {
         store.dispatch({
             type: "increment"
         });
     }; */

    /*    onDecrement = () => {
           store.dispatch({
               type: "decrement"
           });
       }; */

    st = (e) => {
        var s = e.target.value;
        this.props.setText(s)
    }



    render() {

        // src/Action.js里面的方法:  increment,decrement  是通过export default connect(mapStateToProps,Action)(App); 传入的  
        const { increment, decrement, setText } = this.props;
        //setText()


        // store.subscribe() 监听store的值是否改变 如果改变了则 调用 setState 来重新渲染页面(每次用setState都会重新渲染页面) 如果把setState写在方法外面,会无限次调用setState

        /*    store.subscribe(() => {
               this.setState({
                   count: store.getState()
               })
           });
    */
        return (
            <div>
                <h1  >this is redux totu page </h1>
                {/*  <h2 className="text-center mt-2">{store.getState()}</h2> */}
               <h3 className="text-center mt-2">{this.props.count} </h3>
                <h3 className="text-center mt-2"> {this.props.text}</h3>  

                <p className="text-center">
                     <button className="btn btn-primary mr-2" onClick={() => increment()}>Increase</button>
                    <button className="btn btn-danger  mr-2 " onClick={() => decrement()}>Decrease</button>
                    <input className=" mr-2" type="text" onKeyUp={this.st} />  

                    {/* 
                   其他子组件 需要引入
                      import { connect } from "react-redux";  
                      {this.props.count}
                      export default connect(
                        state => ({ 
                            count: state.count,
                            
                        })

                    )(ContactComponent);
                   */}


                    {/* <button onClick={this.handleIncrement} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={this.handleDecrement} className="btn btn-danger my-2">Decrease</button> */}
                </p>
            </div>
        );
    }
}


// state 指的是 src/Reducer.js 里返回的state的值 当然变量名字可以自己改
/* const mapStateToProps = state => ({
    count: state
}); */

//export default connect(mapStateToProps)(App);


/*
    connect( fucntion,Action) connect会把Action里方法放到this.props里去
    Action =  import * as Action from '../Action';
    action.js里的方法会返回 type:[value] (type的值) 这样src/Store.js里createStore(Reducer) 的Reducer 方法,会把 type的值 当作参数action.type 传入, 传入后计算出返回值 state ,  
*/
export default connect(
    state => ({ //当然变量名字可以自己改
        count: state.count,
        text: state.text,
    }),
    Action
)(App);

//export default connect(mapStateToProps,Action)(App);