import React from 'react';
const Details = ({ tokens = [], cash = 0 }) => {
    return (
        <div className="col-md-3">
            <h3>Your Selected Numbers are:</h3><br /><br />
            {
                tokens.length > 0 ? <ul>
                    {
                        tokens.map(t =>
                            <li key={t.value}>
                               <h4> {t.value}</h4><br/>
                            </li>
                        )
                    }
                </ul> : <div><h4>Please select numbers..!</h4></div>
            }
            <br /><br />
            <h3 style={{color:'blueviolet',fontWeight:'bolder'}}>Total Bet amount is ${cash}</h3>
        </div>
    );
}
export default Details;