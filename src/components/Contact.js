
import React from 'react';

class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: 'Type your message',
            count:  0 
        };
      //   this.handlEmail = this.handlEmailFunc.bind(this);
      this.handlInputChange = this.handlInputChange.bind(this) ;
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
    handlSubmit=(e)=>
    {
        e.preventDefault();
        console.log(this.state) ;
    } 
    // 合并两个函数
    handlInputChange   (e)  
    {
        const name = e.target.name;

        const type = e.target.type;

        const value = type === 'checkbox' ? e.target.checked : e.target.value ;

        this.setState({
            [name]:value,
            count: this.state.count + 1 
        })

    }
    render() {
        //  console.log(this.props.location.search) ; // query params
        //console.log( this.GetQueryString('email')) ;
        const elementParamsMsg =
            this.props.match.params.msg ? " This is  params of route: " + this.props.match.params.msg : " We have no params of route ";


        return (
            <div>
                <h1>This is page contact </h1>
                <p> {elementParamsMsg} </p>
                <p> 输入 { this.state.count } 次 </p>
                <p> { this.state.email } </p>
                <p> { this.state.message } </p>

                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handlSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"  value={this.state.email}  onChange={this.handlInputChange}  /* onKeyUp={this.handlEmail}  */ />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Example textarea</label>
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
