import React from 'react';
import './Players.css';

const Players = (props) => {
    console.log(props);
    const {name, image, description, price,instructor} = props.players;
    return (
        <div className="players-container col-md-4 ">
            <div className="">
                <div className=" my-4">
                    <div className="card p-2 ">
                            <img className="card-img-top" src={image} alt={name}/>
                         <div className="card-body">
                            <h5>{name}</h5>
                            <p>{description}</p>
                            <p>instructor : <span className="instructor">{instructor}</span></p>
                            <p className="price text-muted">${price}</p>
                            <button className="btn btn-sm btn-primary text-center main-btn"
                            onClick={ () =>props.addToCart(props.players)}>Book</button>
                         </div>
                    </div>
                 </div>
             </div>
             <div>
                 
             </div>

        </div>
    );
};

export default Players;