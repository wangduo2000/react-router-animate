import React from 'react';
import {CSSTransition} from 'react-transition-group';

export default ( Comp, animate, where, time) => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.num = 0;
      this.switchTo = this.switchTo.bind(this)
    }
    switchTo(str,animateIn,animateOut){
      switch(str){
        case 'rollIn':
          this[animateOut] = 'rollOut';
          break;
        case 'lightSpeedIn':
          this[animateOut] = 'lightSpeedOut';
          break;
        case 'hinge':
          this[animateIn] = 'fadeInLeft'
          this[animateOut] = 'hinge';
          break;
        default:
      }
    }
    render () {
      let num = this.props.location.state ? this.props.location.state.num : 0
        ,animateState = animate ? animate : 'fade'
        ,animateDirection = ['Right','Left']
      switch(animateState){
        case 'flip':
          animateDirection = ['X','Y'];
          break;
        case 'rotate':
          animateDirection = ['DownLeft','UpLeft'];
          break;
        case 'hinge':
        case 'jackInTheBox':
        case 'rollIn':
        case 'rollOut':
        case 'lightSpeedIn':
        case 'lightSpeedOut':
          animateDirection = '';
          break;
        default:
          if(Object.prototype.toString.call(where) === "[object Array]"){
            animateDirection = [...where]
          }
          switch(where){
            case undefined:
            case 'Right':
            case 'Left':
              break;
            case 'Up':
            case 'Down':
              animateDirection = ['Down','Up'];
              break;
            case 'X':
            case 'Y':
              animateDirection = ['X','Y'];
              break;
            default:
          }
      };
      this.animateIn = animateState + (animateDirection === '' ? '' : 'In' + animateDirection[0])
      this.animateIn2 = animateState + (animateDirection === '' ? '' : 'In' + animateDirection[1])
      this.animateOut = animateState + (animateDirection === '' ? '' : 'Out' + animateDirection[1])
      this.animateOut2 = animateState + (animateDirection === '' ? '' : 'Out' + animateDirection[0]);
      this.switchTo(this.animateIn,'animateIn','animateOut')
      this.switchTo(this.animateIn2,'animateIn2','animateOut2')
      return (
        React.createElement(CSSTransition, {
          in:  !!this.props.match, 
          classNames: {
            enter: 'animated',
            enterActive: num > this.num ? this.animateIn : this.animateIn2,
            exit: 'animated',
            exitActive: num > this.num ? this.animateOut : this.animateOut2,
          }, 
          timeout: !!time ? (typeof(time) === 'number' ? time : 1000) : 1000, 
          mountOnEnter: true, 
          unmountOnExit: true, 
          toAdd:  this.num = !!this.props.location.state ? this.props.location.state.num : 0
        }, 
          React.createElement(Comp, {...this.props})
        )
      )
    }
  }
}