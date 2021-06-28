import React from 'react';
const cashVal = [1, 5, 10, 20];

const BetCash = ({ onCashClicked, disableCash }) => {
    return (
        <div className="col-md-3 text-center">
            <h3>Bet Cash</h3>
            <div className="container">
            {cashVal.map(i =>
            <button disabled={!disableCash} 
                className="btn btn-warning cash" 
                onClick={() => onCashClicked(i)} 
                key={i}>${i}</button>)}
            </div>
        </div>
    )
}


export default BetCash;