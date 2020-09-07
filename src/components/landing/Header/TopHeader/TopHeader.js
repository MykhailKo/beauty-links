import React from 'react';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import PopUpBtn from '../PopUpBtn/PopUpBtn';
import Registration from '../Registration/Registration';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import ContactBtn from '../ContactBtn/ContactBtn';

const TopHeader = () => {
    return (
        <div>
            <h2>TopHeader</h2>
            <Logo />
            <Search />
            <PopUpBtn />
            <Registration />
            <LanguageBlock />
            <ContactBtn />
        </div>
    )
}

export default TopHeader