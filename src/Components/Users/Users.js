import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressCard, faBusinessTime } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const Users = (props) => {
    // console.log(props.user);
    const { first_name, last_name, email, img, gender, country, salary } = props.user;
    return (
        <div className="col-md-4 box">
            <div className="user-cart">
                <div className="user-img">
                    <img src={img} alt="" />
                </div>

                <h4>Name:{first_name} {last_name}</h4>

                <h4>Country:{country}</h4>

                <h4>
                    Email:{email}
                </h4>
                <h4>
                    salary/month:{salary} taka
                </h4>
                <h4>gender:{gender}</h4>
                <br />
                <button className="btn-regular mt-2" onClick={() => props.handleAddToCart(props.user)} > <FontAwesomeIcon icon={faUser} /> Hire</button>
                <div className="m-x">
                    <p className="fontAwesome"><FontAwesomeIcon icon={faAddressCard} /></p>
                    <p><FontAwesomeIcon icon={faBusinessTime} /></p>
                </div>



            </div>
        </div>
    );
};

export default Users;