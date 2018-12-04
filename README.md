# react-router-animate

一个高阶组件，用来在 react 路由切换时产生动画效果

### 安装

```bash
npm install react-router-animate --save
yarn add react-router-animate
```

你可以直接通过`npm/yarn`安装，该动画依赖 animate.css 所以需要在项目最初的入口文件 index.js 中引入 animate.css 文件，你需要下载该文件并放在 src 的某个文件夹下
[Animate.css website]:  https://daneden.github.io/animate.css/

```bash
引入 animate.css
import 'styles/animate.css'
```

```javascript
import wrapperAnimate from 'react-router-animate'; // 引入我们的的 wrapperAnimate 高阶组件
```

### 使用 
将路由跳转的组件用该高阶组件包起来，有四个参数可以传入，组件作为第一个参数，第二个参数是动画的效果名，第三个参数是该动画效果的方向，第四个参数是时间，默认1000ms。如果要设置 number 类型的时间要去 animate.css 文件中修改文件里的时间，这样才会有较好的动画效果，否则会在动画快结束时突然加快。
```bash
export default wrapperAnimate(HomePage,'fade','Left')
如上组件为HomePage，动画名为 fade, Left 为 state 中 num 值大的从右手边进入屏幕，离开的从屏幕离开到左手边
# ![Image text]()

第二个参数可以选择：
'bounce'、'fade'、'flip'
'lightSpeedIn'、'lightSpeedOut'、'rotate'
'slide'、'zoom'、'hinge'
'jackInTheBox'、'rollIn'、'rollOut'

第三个参数可选择：
'Left'、'Right'
'Down'、'Up'
'X'、'Y'
首字母一定要大写
如果第二个参数传入 'rotate' 则第三个参数可以传入一个数组，定义进入与离去的方向，数组两个值，第一个式进入的方向，第二个式离去的方向

第四个参数可选：
数值: 毫秒数


后面三个参数也可以不传，那就是 'fade', 'Left', '1000' 也就是左右滑动动画

动画样式参考:
https://daneden.github.io/animate.css/
```

#### 案例
```javascript
// 这是 入口 index.js 文件
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import './animate.css'; //导入动画样式文件

import HomePage from './components/Homepage';
import AddressPage from './components/AddressPage';

class App extends Component {
  render() {
  /** 假如你的代码如此，则可直接使用最下方代码代替，用 children 替换 component
   * Switch
   * return (
   *  <Switch>
   *    <Route path="/login"` component={Login} />
   *    <Route path="/signup" component={Signup} />
   *    <Redirect to="/login" />
   *   </Switch>
   * );
   **/
    console.log(this)
    return (
      <div style={ {width: '100%',height: '100%',position: 'relative'} }>
        <div style={ {lineHeight: '50px',background: '#fff',position: 'absolute'} }
          onClick={ () => {
            this.props.history.push('/home',{ num: 0 })
          }}
        >Home</div>
        <div style={ {lineHeight: '50px', background: '#fff',position: 'absolute', left: 100} }
          onClick={ () => {
            this.props.history.push('/address',{ num: 1, })
          }}
        >Address</div>
        <Route exact path='/' children={ props => <HomePage  {...props}/> } />
        <Route path='/home' children={ props => <HomePage {...props} /> } />
        <Route path='/address' children={ props => <AddressPage {...props} /> } />
      </div>
    );
  }
}

const Appp = withRouter(App)

render(
  <BrowserRouter>
    <Appp />
  </BrowserRouter>,
  document.querySelector('#root')
);


// 这是 HomePage.js 文件
import React, { Component } from 'react';
import wrapperAnimate from 'react-router-animate'; //导入我们的的 wrapperAnimate 组件

class HomePage extends Component {
  render () {
    return (
      <div style={ {width: '100%',height: '100%', background: 'green'} }>HomePage</div>
    )
  }
}
export default wrapperAnimate(HomePage)
// 不传相当于 export default wrapperAnimate(HomePage,'fade','Left',1000) 默认动画效果

// AddressPage.js 与 HomePage.js 差不多，就可以试跑一下
```
点击时，this.history.push 要传入 num 作为判断动画的依据，一定要传入这个参数，否则就不能产生理想的动画效果

### 动画效果
  动画播放时会有白屏，是在布局时，要将HomePage组件的最外面容器，这里就是这个div要设置为position: absolute; 这样就可以取消白屏，做到无缝滑动; 同样其他的组件也要设置为position: absolute; 只要在路由匹配的那个组件的最外面容器设置即可

### FAQ

*   **Q1: 动画执行时间改动？**
    可以设置 timeout 属性为数值，并保持与 animate.css 定义的过渡时间一致, 默认的时间为1000, 如果要修改则要改animate.css中的时间
    
    **Q2: 修改时间后动画最后出现快进？**
    这是 animate.css 文件的动画时间没有同步改为你传入的数值的原因
---

