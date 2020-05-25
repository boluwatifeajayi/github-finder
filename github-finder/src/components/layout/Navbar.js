import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h3 style={{color:'white'}}>
                    <i className={this.props.icon}></i>{this.props.title}
                    
                </h3>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
