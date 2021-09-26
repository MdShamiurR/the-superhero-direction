import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './AllUsers.css'

const AllUsers = () => {
    const [users, setUser] = useState([])
    // console.log(users);


    useEffect(() => {
        fetch("./custom-data.json")
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const [addedMember, setaddedMember] = useState([]);

    const handleAddToCart = (newMember) => {
        const newAddedMember = [...addedMember, newMember]
        setaddedMember(newAddedMember);
    };
    console.log(addedMember);
    let nameHolder = '';

    let total = 0;

    for (let userName of addedMember) {
        // console.log(userName.first_name);
        nameHolder = nameHolder + userName.first_name;
        total = total + userName.salary;
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                            users.map(user => <Users handleAddToCart={handleAddToCart} key={user.id} user={user}></Users >)
                        }
                    </div>

                </div>
                <div className="col-md-3 cart-style">

                    <div className="added-cart">
                        <h4 className="text-warning">Modarator Added:{addedMember.length}</h4>
                        <h4 className="text-warning">Total Salary Count:{total}</h4>
                        {/* <h4 className="text-warning">Added Members : {nameHolder}  </h4> */}

                        <div>
                            <ul>
                                <h1>
                                    <i>
                                        {
                                            addedMember.map(guest => <li>{guest.first_name}</li>)
                                        }
                                    </i>
                                </h1>
                            </ul>
                        </div>




                    </div>













                </div>

            </div>

        </div>
    );
};

export default AllUsers;