import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [{ id: 1, title: 'Todo1' }, { id: 2, title: 'Todo2' }] };			//默认数据
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        let key = this.state.items[this.state.items.length - 1].id + 1;
        const newItems = this.state.items.concat([{ id: key, title: 'Todo' + key }]);	//添加项
        this.setState({ items: newItems });								//同步state
    }
    removeItem(i) {
        const newItems = this.state.items.slice();

        newItems.splice(i, 1);
        this.setState({ items: newItems });  						//同步state
    }
    render() {
        const items = this.state.items.map((item, i) => (
            <li key={item.id} onClick={() => this.removeItem(i)}>
                {item.title}
            </li>
        ));
        return (
            <div className="App">
                <h2>React CSS动画示例</h2>
                <button onClick={this.addItem}>增加新项</button>
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
