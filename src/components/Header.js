import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return(
            <div className={ styles.head }>
                <p className="q">something</p>
            </div>
        );
    }
}

export default Header;