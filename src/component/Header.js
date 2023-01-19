import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={{ height: '80px', backgroundColor: '#000' }}>
            <ul style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', color: '#fff', paddingTop: 20 }}>
                <li><Link style={{ color: '#fff', fontSize: '22px' }} to='/'>Home</Link></li>
                <li><Link style={{ color: '#fff', fontSize: '22px' }} to='/about'>About</Link></li>
                <li><Link style={{ color: '#fff', fontSize: '22px' }} to='/contact'>Contact</Link></li>
                <li><Link style={{ color: '#fff', fontSize: '22px' }} to='/gallery'>Gallery</Link></li>
            </ul>
        </div>
    )
}

export default Header;