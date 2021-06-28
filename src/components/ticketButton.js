import React from 'react';
const TicketButton = ({ token, onTokenSelected }) => {
    const { value, selected } = token;
    return (
        <button
            id={value}
            className={selected ? 'btn btn-dark' : 'btn btn-light btn-outline-dark'}
            onClick={() => onTokenSelected(token)}>
            {value}
        </button>
    )
}

export default TicketButton;