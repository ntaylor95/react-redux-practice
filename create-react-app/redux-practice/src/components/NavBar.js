import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    //console.log(props);
    
    //to do a redirect to a page
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Navigation</a>
    
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/todos'>Todos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);