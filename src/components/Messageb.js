import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlipMove from 'react-flip-move';
import articles from '../data/articles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, title: 'Todo1' },
                { id: 2, title: 'Todo2' }
            ],
            articles: articles,

        };			//默认数据
        this.addItem = this.addItem.bind(this);
        this.addArt = this.addArt.bind(this);
    }
    addItem() {
        let key = this.state.items.length>0?this.state.items[this.state.items.length - 1].id + 1 : 0 ;
        const newItems = this.state.items.concat([{ id: key, title: 'Todo' + key }]);	//添加项
        this.setState({ items: newItems });								//同步state
    }
    addArt() {
        let key =  this.state.articles.length>0 ?   this.state.articles[this.state.articles.length - 1].id + 1 : 0 ; 
        
        const newArticles = this.state.articles.concat({ id: key , timestamp:  Date.now()  , name: 'React JS is very good ' + key  });
        this.setState({ articles: newArticles });
    }
    removeItem(i) {
        const newItems = this.state.items.slice();

        newItems.splice(i, 1);
        this.setState({ items: newItems });  						//同步state
    }

    removeArt(i) {
        const newItems = this.state.articles.slice();

        newItems.splice(i, 1);
        this.setState({ articles: newItems });
    }
    shuffleArt=(e)=>{
        
        this.setState({ articles: this.shuffle( this.state.articles.slice() ) });

    }
    shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    
    };
    render() {
        const items = this.state.items.map((item, i) => (
            <li key={item.id} onClick={() => this.removeItem(i)}>
                {item.title}
            </li>
        ));

        function timef(time = new Date()) {
            var date = new Date(time); // 增加8小时
            return date.toJSON().substr(0, 19).replace('T', ' ');
        }



        const articles = this.state.articles.map((article, i) => {

            var time = timef(article.timestamp);
            return (
                <li key={article.id} onClick={() => this.removeArt(i)}  >
                    {article.id}: {article.name} {time}
                </li>


            )
        }
        );
        //      enterLeaveAnimation: 'accordianVertical' ,
       // enterLeaveAnimation: 'accordianHorizontal'

        const customEnterAnimation = {
            from: { transform: 'scale(3, 3)' },
            to: { transform: 'scale(1, 1) ' }
        };
        const customLeaveAnimation = {
            from: { transform: 'scale(1, 1)' },
            to: { transform: 'scale(0.1, 0.1) translateY(0px) translateX(200px)' }
        };
        return (
            <div className="App">
                <h4>FlipMove exemple</h4>
                <button onClick={this.addArt}>add new </button>
                <button onClick={this.shuffleArt }>shuffle  </button>

                <FlipMove
                                          /*  enterAnimation="fade"   leaveAnimation="fade"  */

                    enterAnimation="elevator" leaveAnimation="elevator" 
                    appearAnimation="accordionVertical"
  
                    /* staggerDurationBy="30" */
                    duration={500}
                    typeName="ul"
                >
                    {articles}
                </FlipMove>
                <hr /> <hr />


               
                <h2>ReactCSSTransitionGroup exemple </h2>

                <button onClick={this.addItem}>add new item</button>
                <ul>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {items}
                    </ReactCSSTransitionGroup>


                </ul>
            </div>
        );
    }
}



export default App;
