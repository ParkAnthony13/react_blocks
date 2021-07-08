import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={ styles.box }>
                {this.props.children}
            </div>
        );
    }
}

export default Main;