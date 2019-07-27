
import React from 'react';
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import scrollToElement from 'scroll-to-element';


class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            email: '',
            message: '',
            newmsg: {
                email: 'test@test',
                message: 'testtesttesttesttest',
            },
            count: 0,
            emailError: '',
            messageError: '',
            messages: [],
            removeSelected: [],
        };
        //   this.handlEmail = this.handlEmailFunc.bind(this);
        this.handlInputChange = this.handlInputChange.bind(this);
    }
    componentDidMount() {
        if (localStorage.getItem("messages"))
            this.setState({
                messages: JSON.parse(localStorage.getItem("messages"))
            })



    }
    GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    // 如果这样写就不用写   this.handlEmail = this.handlEmailFunc.bind(this); 
    //  handlEmailFunc= (e) => {  this.setState({ email: e.target.value });  }

    // handlMessage = (e)=> {  this.setState({ message: e.target.value });  }
    //  handlMessage  (e)  {  this.setState({ message: e.target.value ,  count:  this.state.count + 1 });  }

    /*     handlEmailFunc(e ) {
            e.preventDefault();
              this.setState(
                     
                   state => ({     count:  state.count + 1    } )  
                 
                );   
    
              this.setState(
                    { email: e.target.value  , count:  this.state.count + 1   },
                    (state) => {   console.log( state)     } , 
                    
                  );   
        } */
    handlSubmit = (e) => {

        e.preventDefault();
        if (this.validate()) {
            let maxid = -1;

            if (this.state.messages.length > 0) {
                this.state.messages.map((c) => {
                    if (maxid <= c.id) maxid = c.id;
                });
            }
            maxid = maxid + 1;
            this.state.messages.push({ email: this.state.newmsg.email + maxid, message: this.state.newmsg.message, date: new Date().toLocaleString(), id: maxid })
            this.insertIntoLocalStore(this.state.messages)
            this.clear(e);

        }
        else {
            // alert('Failed');

        }

    }
    validate() {
        let emailError = '';
        let messageError = '';

        if (!this.state.newmsg.email.includes('@')) emailError = 'Invalide email';
        if (this.state.newmsg.email === '') emailError = 'Empty email';

        if (this.state.newmsg.message === '') messageError = 'Empty string';







        if (messageError !== '' || emailError !== '') {



            this.setState({ emailError: emailError, messageError: messageError });
            return false;
        }
        else {
            this.setState({ emailError: '', messageError: '' });
        }

        return true;



    }
    // 合并两个函数
    handlInputChange(e) {
        const name = e.target.name;

        const type = e.target.type;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;

        let newmsg = this.state.newmsg;
        newmsg[name] = value;


        this.setState({
            [name]: value,
            count: this.state.count + 1,
            newmsg: newmsg,
        })


    }


    editMsg(message) {



        //   window.scrollTo( document.getElementById('myform').scrollWidth , document.getElementById('myform').offsetParent.offsetTop   ) ;
        scrollToElement("#myform", {
            offset: 0,
            //  ease: 'out-bounce',
            duration: 500
        });
        this.setState({ newmsg: message }); // 变量都用对象类型, 这样做,  newmsg 与 messsages中传进来的message 指向了同一个内存地址 ,于是修改newmsg等于修改了messsages中传进来的message


    }
    initialState() {

        this.setState({

            email: '',
            message: '',
            newmsg: {
                email: '',
                message: '',
            },
            emailError: '',
            messageError: '',
            removeSelected: [],
        });



    };

    clear = (e) => {
        e.preventDefault();
          this.initialState();

        /*   this.setState({
  
              newmsg: {
                  email: '',
                  message: '',
              },
          }); */
    }
    editDone = (e) => {
        this.clear(e);
    }
    handleMessages(messagestemp, i) {
        messagestemp.reverse() ; //虽然messages 是常量 ,但是可以修改它的内存
        
        let removeSelected;
        let that = this.state.removeSelected;

        let idslt;
        messagestemp.map(function (s, ii) {
            if (i == ii) {
                idslt = s.id;  // 获取要删除那个message 的message.id
            }
        })

        


        removeSelected = that.filter(function (val) {
            if (val != idslt) return val; //把removeSelected中不是要删除那个message 的message.id  全部返回

        })

    //  console.log( idslt  ,  removeSelected)
        messagestemp.splice(i, 1); //虽然messages 是常量 ,但是可以修改它的内存
        messagestemp.reverse()
        
      
        
           this.setState({ messages: messagestemp, removeSelected: removeSelected });
           this.insertIntoLocalStore(messagestemp)  

    }
    removeMsg(i, e) {

        const messagestemp = this.state.messages.slice();// 这样写 两个变量就不会指向同意内存
        // messagestemp.reverse().splice(i, 1); //虽然messages 是常量 ,但是可以修改它的内存

        this.handleMessages(messagestemp, i);

    }
    removeAll() {
        let messagestemp = [];
        if (window.confirm("Are you sure to remove them?")) {
            this.setState({ messages: messagestemp });
            this.insertIntoLocalStore(messagestemp)
        }

    }

    removeSelected() {


        let that = this.state.removeSelected;
        // filtre 不会加入是false的元素而map 会把false当成一个元素加入到数组
        let newmsgs = this.state.messages.filter(function (s) {
            if (that.indexOf(s.id.toString()) >= 0) {
                return false;
            } else {
                return s;
            }
        });







        if (window.confirm("Are you sure to remove them?")) {
            this.setState({ messages: newmsgs, removeSelected: [] });
            this.insertIntoLocalStore(newmsgs)
        }



    }

    checkedBox = (e) => {
        if (e.target.checked) {
            this.state.removeSelected.push(e.target.value)
        }
        else {
            this.state.removeSelected = this.state.removeSelected.filter(function (s) {
                if (s == e.target.value) {
                    return false;
                } else {
                    return s;
                }
            });

        }
        this.setState({ removeSelected: this.state.removeSelected })

    }

    insertIntoLocalStore(messages) {

        localStorage.setItem("messages", JSON.stringify(messages))
    }



    render() {
        //  console.log(this.props.location.search) ; // query params
        //console.log( this.GetQueryString('email')) ;
        const elementParamsMsg =
            this.props.match.params.msg ? " This is  params of route: " + this.props.match.params.msg : " We have no params of route Or params not match ";

        let emailErrorElement = null;
        let messageErrorElement = null;

        if (this.state.emailError) {
            emailErrorElement = <div className="alert alert-danger">{this.state.emailError}</div>
        }
        if (this.state.messageError) {
            messageErrorElement = <div className="alert alert-danger">{this.state.messageError}</div>
        }






        let elMes;
        let messages = [];
        let haveMsg = true;


        let removeSelectedBool = true;
        if (this.state.removeSelected.length > 0)
            removeSelectedBool = false;
        else
            removeSelectedBool = true;



        messages = [...this.state.messages];  // 如果直接写   messages =  this.state.messages,这两个变量就会指向同一内存,对messaes操作会同时对this.state.messages操作

        messages = messages.reverse();

        if (messages.length > 0) {
            haveMsg = false;


            elMes = messages.map((message, i) => {
                var className = "alert-message alert-message-notice ";
                let isCheck = false;
                this.state.removeSelected.map(function (val) {
                    if (message.id == val) { className += " alert-message-border border-info  "; isCheck = true; }


                });

                return (


                    <div key={message.id} className="col-md-12  " >
                        <div className={className} >
                            <div className="float-right" >
                                <p className="checkbox">
                                    <label>
                                        <input type="checkbox" className=" form-check-input mr-2 " onChange={this.checkedBox} value={message.id} checked={isCheck} />
                                        <span className="cr"><i className=" cr-icon  glyphicon glyphicon-ok"></i></span>
                                    Select
                                    </label>
                                </p>
                                <button className="btn btn-info mr-2  " onClick={() => this.editMsg(message)}  >edit</button>
                                <button className="btn btn-danger mr-2   " onClick={this.removeMsg.bind(this, i)} >remove</button>
                            </div>


                            <h4 > <b>#{message.id}</b>  <span >{message.email}</span>  </h4>



                            <div className="ml-4"> {message.message}   </div>
                            <p className="ml-2">{message.date}</p>
                        </div>  </div>



                )
            }

            )
        } else {
            haveMsg = true;
            elMes = (

                <div className="col-md-12  border border-success ">
                    <div className="alert-message alert-message-notice">
                        <h5> We don't have any message yet </h5>
                    </div>
                </div>
            )
        }




        return (
            <div    >
                <h1>This is page contact </h1>
                <p> {elementParamsMsg} </p>
                <p> Type {this.state.count} time </p>
                <p> {this.state.newmsg.email} </p>
                <p> {this.state.newmsg.message} </p>



                <div className="row"  >
                    <div className="col-md-8">
                        <form id="myform" ref={this.myRef} >
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                {emailErrorElement}
                                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={this.handlInputChange} /* onKeyUp={this.handlEmail} */ value={this.state.newmsg.email} />{/* 监听到变量变化时,每次都会重新渲染页面所以要加 value={this.state.email}   */}

                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Example textarea</label>
                                {messageErrorElement}
                                <textarea className="form-control" id="message" name="message" rows="8" placeholder="message" value={this.state.newmsg.message} onChange={this.handlInputChange} ></textarea>
                            </div>
                            <button className="btn btn-success mr-2" onClick={this.handlSubmit} >Add</button>
                            <button className="btn btn-dark mr-2" onClick={this.clear}>Clear</button>
                            <button className="btn btn-secondary mr-2" onClick={this.editDone}>Edit</button>
                        </form>

                    </div>
                </div>


                <div className="row ReactCSSTransitionGroup ">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300} className='sspp'>
                        <button className="btn btn-danger mt-4 mb-4 mr-2  " onClick={this.removeAll.bind(this)} disabled={haveMsg} >removeAll</button>
                        <button className="btn btn-danger mt-4 mb-4   " onClick={this.removeSelected.bind(this)} disabled={removeSelectedBool}>removeSelected </button>
                        <p>Message selected: {this.state.removeSelected.length}</p>
                        {elMes}
                    </ReactCSSTransitionGroup>


                </div>
            </div>

        );


    }
}


/* function ContactComponent({match}) {

                            let elementParamsMsg =
                            match.params.msg ? " This is  params of route: " + match.params.msg : " We have no params of route ";
                    
                    
                        return (
        <div>
                            <h1>This is page contact </h1>
                            <p> {match.params.msg} </p>

                        </div>
                        );
                    } */

// export default ContactComponent;

export default connect(
    state => ({
        count: state.count,
        text: state.text,
    })

)(ContactComponent);
