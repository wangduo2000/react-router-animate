# react-router-animate
A higher-order component for animating when react-router jumping

## Install

```bash
npm install react-router-animate --save
yarn add react-router-animate
```

You can install this higher-order component with `npm/yarn`, you need animate.css, so you must import animate.css in you index.js. Download [Animate.css](https://raw.githubusercontent.com/daneden/animate.css/master/animate.css) and place it in you src. You App should depend on react and react-transition-group.


```bash
import 'styles/animate.css'
```

```javascript
import wrapperAnimate from 'react-router-animate'; // import hegher-order component called wrapperAnimate
```

## Usage 
This higher-order component has four parameters, the component is the first parameter, the second parameter is the animated type, the third parameter is the direction of animation, the fourth parameter is the times of animations, default 1000ms. 
```bash
export default wrapperAnimate(HomePage,'fade','Left')
# ![Image text]()

Second parameter:
'bounce'、'fade'、'flip'
'lightSpeedIn'、'lightSpeedOut'、'rotate'
'slide'、'zoom'、'hinge'
'jackInTheBox'、'rollIn'、'rollOut'
default: 'fade'


Third parameter:
'Left'、'Right'
'Down'、'Up'
'X'、'Y'
default: 'Left'
First character upper case
You can use Array as the third parameter when you use 'rotate' as the second parameter to determine the direction of the animation. The first value of the Array is the direction of entry, the second value of the Array is the direction of leave.


Fourth parameter:
Number:  ms
default: 1000
```
[animate type](https://daneden.github.io/animate.css/)


### Example
```javascript
// index.js
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import './animate.css'; 

import HomePage from './components/Homepage';
import AddressPage from './components/AddressPage';

class App extends Component {
  render() {
  /** not with router animate
   * return (
   *  <Switch>
   *    <Route path="/login"` component={Login} />
   *    <Route path="/signup" component={Signup} />
   *    <Redirect to="/login" />
   *   </Switch>
   * );
   **/

  // with animate, useing children to make higher-order components work
    return (
      <div style={{ width: "300px", height: "500px",position: 'relative' }}>
        <div style={{ lineHeight: '50px',background: '#fff',position: 'absolute',zIndex: 100 }}
          onClick={() => {
            this.props.history.push('/home',{num: 0})
          }}
        >Home</div>
        <div style={{ lineHeight: '50px', background: '#fff',position: 'absolute', left: 100,zIndex: 100 }}
          onClick={() => {
            this.props.history.push('/address',{num: 1,})
          }}
        >Address</div>
        <Route exact path='/' children={ props => <HomePage  {...props}/>} />
        <Route path='/home' children={ props => <HomePage {...props} />} />
        <Route path='/address' children={ props => <AddressPage {...props} />} />
      </div>
    );
}
}

const Appp = withRouter(App);

render(
  <BrowserRouter>
    <Appp />
  </BrowserRouter>,
  document.querySelector("#root")
);


// HomePage.js
import React, {Component} from 'react';
import wrapperAnimate from 'react-router-animate';

class HomePage extends Component {
  render () {
    return (
      <div style={{ width: '100%',height: '100%', lineHeight: '500px', background: 'green',position: 'absolute' }}>
        HomePage
      </div>
    )
}
}
export default wrapperAnimate(HomePage)
// like export default wrapperAnimate(HomePage,'fade','Left',1000)

// Addresspage.js is the same code as HomePage. Js, then you can run it
```
You should use this.history.push with num attribute of state parameter to change router, you will don't have better animation with num attribute of state parameter.


## FAQ
*   **Q1: White screen？**
    You need to add the style position: position to each component that goes in and out of the route jump.
    
    **Q2: Animation acceleration at the end？**
    You parameter and the time in animate.css must be the same, you should change time in animate.css when you add the fourth parameter.
---

