import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const NavBar = () => {
    return(
        <div>
            <h2>NavBar</h2>
            <ul>
                <MenuItem text={'Hair'} />
                <MenuItem text={'Body'} />
                <MenuItem text={'Nails'} />
            </ul>
        </div>
    )
}

export default NavBar