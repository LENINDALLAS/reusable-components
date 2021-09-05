import './Hamburger.css';
import React from 'react';

export const Hamburger = function Hamburger(props) {
    // var className = ;

    const [icon, setIcon] = React.useState('fas fa-bars');

    return (
        <i class={icon} onClick={() => setIcon(icon === 'fas fa-bars' ? 'fas fa-times' : 'fas fa-bars')} />
    )
}

Hamburger.defaultProps = {
    type: 'fas fa-bars'

}