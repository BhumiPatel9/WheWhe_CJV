import React from 'react';
import TokenButton from '../components/ticketButton';

const TicketContainer = ({ tokens, toggleTokenSelection, onClearClicked, showDetails, disableCash, onRandomButtonClicked }) => {
    return (
        <div className="col-md-6 text-center">
            <h3>Tickets Selection</h3>
            <div className="container">
                {
                    tokens.map((t, i) => <TokenButton key={i} token={t} onTokenSelected={toggleTokenSelection} />)
                }
                <div className="row-md-3">
                    <button className="btn btn-primary" onClick={onRandomButtonClicked}>Select Random</button>
                    <button className="btn btn-secondary" onClick={onClearClicked}>Clear selection</button>
                    <button disabled={!disableCash} onClick={showDetails} className="btn btn-outline-success">Bet Cash</button>
                </div>
            </div>
        </div>
    )
}
export default TicketContainer;

