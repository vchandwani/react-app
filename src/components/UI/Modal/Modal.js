import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import classes from './Modal.css';
import Aux from '../../../hoc/ReactAux/ReactAux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        const animationTiming = {
            enter: 400,
            exit : 1000
        }
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <CSSTransition in={this.props.show} timeout={animationTiming} mountOnEnter unmountOnExit classNames="fade-slide">
                    <div className={classes.Modal}>
                        {this.props.children}
                    </div>
                </CSSTransition>
            </Aux>
        )
    }
}

export default Modal;