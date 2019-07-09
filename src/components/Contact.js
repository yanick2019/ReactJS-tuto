
import React from 'react';
const initialState = {
    email: '',
    message: '',
    count: 0,
    emailError: '',
    messageError: ''
};
class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            count: 0,
            emailError: '',
            messageError: ''
        };
        //   this.handlEmail = this.handlEmailFunc.bind(this);
        this.handlInputChange = this.handlInputChange.bind(this);
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
            const params = {
                 method:'POST',
                 headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email:this.state.email,message:this.state.message})  
                 
            };
            fetch('http://127.0.0.1:5000/message',params)
            .then(
                response =>{
                    if(response.ok)
                    {
                        this.setState(initialState); //  清空 状态 
                        console.log('Success');
                        console.log(response )
                    }else{
                        alert('Failed http://127.0.0.1:5000/message not found');
                        alert(response)
                    }
                }
            ).catch(
                error=> {
                    alert(' catch Failed http://127.0.0.1:5000/message not found' );
                    alert(error)
                }

            );

           
        }
        else {
            alert('Failed');

        }
        console.log(this.state);

    }
    validate() {
        let emailError = '';
        let messageError = '';

        if (this.state.email === '') emailError = 'Empty string';
        if (!this.state.email.includes('@')) emailError = 'Invalide email';

        if (this.state.message === '') messageError = 'Empty string';

        if (messageError !== '' || emailError !== '') {
            this.setState({ emailError: emailError, messageError: messageError });
            return false;
        }

        return true;



    }
    // 合并两个函数
    handlInputChange(e) {
        const name = e.target.name;

        const type = e.target.type;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [name]: value,
            count: this.state.count + 1
        })

    }
    render() {
        //  console.log(this.props.location.search) ; // query params
        //console.log( this.GetQueryString('email')) ;
        const elementParamsMsg =
            this.props.match.params.msg ? " This is  params of route: " + this.props.match.params.msg : " We have no params of route ";

        let emailErrorElement = null;
        let messageErrorElement = null;

        if (this.state.emailError) {
            emailErrorElement = <div className="alert alert-danger">{this.state.emailError}</div>
        }
        if (this.state.messageError) {
            messageErrorElement = <div className="alert alert-danger">{this.state.messageError}</div>
        }

        return (
            <div>
                <h1>This is page contact </h1>
                <p> {elementParamsMsg} </p>
                <p> Type {this.state.count} time </p>
                <p> {this.state.email} </p>
                <p> {this.state.message} </p>

                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handlSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                {emailErrorElement}
                                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={this.state.email} onChange={this.handlInputChange}  /* onKeyUp={this.handlEmail}  */ />

                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Example textarea</label>
                                {messageErrorElement}
                                <textarea className="form-control" id="message" name="message" rows="8" placeholder="name@example.com" value={this.state.message} onChange={this.handlInputChange} ></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">send</button>
                        </form>

                    </div>
                </div>



            </div>

        );


    }
}


/* function ContactComponent({ match }) {

    let elementParamsMsg =
        match.params.msg ? " This is  params of route: " + match.params.msg : " We have no params of route ";


    return (
        <div>
            <h1>This is page contact </h1>
            <p> { match.params.msg } </p>
 
        </div>
    );
} */

export default ContactComponent;
