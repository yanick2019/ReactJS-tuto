
# https://www.youtube.com/watch?v=4-tq4jBD4Y8&list=PLDFBYdF-BxV1crMFDrq5ybo9ultbd27cR&index=12

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

 
# 安装 
```bash
$ npm install -g create-react-app 
```
安装 facebook react 网站开发基础包
+ 安装后
    + C:\Users\user\AppData\Roaming\npm\create-react-app ->  C:\Users\user\AppData\Roaming\npm\node_modules\create-react-app\index.js

## 创建项目
```bash
$ cd 项目目录
$ create-react-app  myReactjs
$ cd create-react-app
$ npm start
```
## 项目框架和 Component 的渲染用法
+ 类名要首字母要大写
    + class HeaderComponent
    + <HeaderComponent />

## Props参数传递

## State 和状态的修改

+ html 里调用的方法 不是class里的方法 而是构造函数constructor里的方法 所以还要让它指向class 里的方法 this.handleClick.bind(this);
    + this.handleClickIndiv = this.handleClick.bind(this);
    + <div onClick={this.handleClickIndiv}
## 组件写法
```javascript
    //写法1
    function Header()
    {
        return(<h1>xxx</h1>);
    }
    //写法2
    import  { Component } from 'react';
    class Header  extends Component {
        或
    class Header  extends React.Component {
    {
        //写方法
        //....
        render(){
        //定义 const let 变量
        //....
            return(<h1>xxx</h1>);
        }
    }
```
## 组件有用方法
```js
this.setState({ isLoading:true }) 修改数据
this.setState(

    //  {email: e.target.value , count: this.state.count + 1  },

    // state => ({   count:  state.count + 1 } )  // 不能用 e.target.value 取不到e 
)
```
constructor
```js
constructor(props) {
        super(props); /// 必须写 
        this.state = {
            lastClicked: "",
            clickCount: 0,
            showB4: true,
        }
        this.handleClickIndiv = this.handleClick.bind(this);
    }

+ 网页点击等事件写法
    + // 如果这样写就不用写   this.handlEmail = this.handlEmailFunc.bind(this); 
    + handlEmailFunc= (e) => {  this.setState({ email: e.target.value });  }

    + // 如果这样写就不用写   this.handlEmail = this.handlEmailFunc.bind(this); 
    + onChange={this.handlMessage.bind(this)} 
    
    + // 如果这样写就要写   this.handlEmail = this.handlEmailFunc.bind(this); 
    + handlEmailFunc(e) {  this.setState({ email: e.target.value });  }
 
 
// 合并两个函数
 
    handlInputChange = (e) =>
    {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value ;
        this.setState({
            [name]:value,
            count: this.state.count + 1 
        })

    }
```
componentWillMount
render
componentDidMount 发生在render 执行后
## 条件渲染和循环渲染

+ { condition && true case }
+ { condition ? true case : false case  }
+ list.map( (item,index)=>( <Block5 key={post.id} post={post} /> )  )
    + 要写 唯一值的key 不然会在console里报错
##  fetch 获取后端数据

安装json-server模拟服务器API

```bash
$ npm install -g json-server
 

```
在src同级目录创建posts.json
启动 
```bash
$ json-server --watch posts.json
```
指定端口号
```bash
$ json-server --watch posts.json --port=3001
$ json-server --watch posts.json --port=3001 --depay 2000 等2秒才返回消息
```


## fetch 等待状态和报错状态的管理

```bash
this.state ={
            isLoading:false,
            hasError:false,
            fetchError: ""
        }
```

## 使用 bootstrap 渲染界面

```bash
$ npm install bootstrap 
``` 
在index.js里导入import 'bootstrap/dist/css/bootstrap.min.css';
如要用bootstrap.min.js 需安装jquery popper.js 并导入

## 利用 react router dom 进行单界面网页开发
```bash
$ npm install react-router-dom
```
+ App.js 
    + 引入 import { BrowserRouter } from 'react-router-dom'  ; 
    + 
    ```javascript
     <div  >
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route path="/" component={BodyComponent} />
          <Route path="/contact" component={ContactComponent} />

          
        </Switch>
      </BrowserRouter>
     </div>
     ````
+ Header.js import { NavLink , Link } from 'react-router-dom'  ; 替换 <a href=""></a> 为 <NavLink to="path"></NavLink>   / <Link to="path"></Link> 
### 问题
        路由匹配是从上个路由往下个路由匹配 如果匹配了第一个就不匹配第二个了 , 如: 主页 路径是 '/' 匹配了有其他路由路径 所以要写上 exact 让它 精确匹配  <Route exact path="/" component={BodyComponent} />
        
        <Route  path="/" component={BodyComponent} />
        <Route path="/contact" component={ContactComponent} />
### 路由 传值/取值 

var data = {id:3,name:sam,age:36};
data = JSON.stringify(data);
var path = `/user/${data}`;
<Navlink to={path}>用户</Navlink>

取值 
+ class中 this.props.match.params.msg 
+ function 
``` javascritpt
    function ContactComponent({ match }) {
    return (
      <div>
        <h1>contact me ! { match.params.msg  } </h1>
      </div>
    );
  }
```
### 路由 参数 与404 页面
<Route path="/contact/:msg(\d*)?" component={ContactComponent} /> // ? 参数有无都可 (\d*) 匹配数字
<Route component={Component404} />

<Route ="/order/:direction(asc|desc)" component={ComponentWithRegex} /> // 只匹配 /order/asc 或 /order/desc
* "/order/asc"  - matched
* "/order/desc" - matched
* "/order/foo"  - not matched


## React表单介绍 
## React表单的 validation
```js
//初始化
const initialState = {
    email: '',
    message: '',
    count: 0,
    emailError: '',
    messageError: ''
};

//state 初始 错误信息 
emailError: '',
messageError: ''

//表单验证方法
validate(){}
// 出错时 
 emailErrorElement = <div className="alert alert-danger">{this.state.emailError}</div>

```
## Post 请求和Server交互

```bash
$ pip install flask // 安装flask框架
$ pip install flask_cors //跨境请求

```
根目录建立 server.py
编写 server.py
 

运行这个服务器
```bash
$ python server.py
```
下载g postman来测试接口
https://www.getpostman.com/downloads/