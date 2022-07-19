import React from "react";
import PersonInfo from "./medium.js";

const PeopleInfoList = () => {
    const peopleInfo = [

        {name: "Tyali",
        age: "25",
        dateOfBirth: "03/16/1997",
        number: "333-333-3333",
        email: "tyalisemailaddress123@gmail.com"},

        {name: "Kelly",
        age: "22",
        dateOfBirth: "12/25/2000",
        number: "222-222-2232",
        email: "kellysemail@gmail.com"},

        {name: "John",
        age: "25",
        dateOfBirth: "05/15/1997",
        number: "555-555-5555",
        email: "jonnyboysemail@gmail.com"},

        {name: "Maury",
        age: "5",
        dateOfBirth: "07/19/2016",
        number: "111-111-1234",
        email: "thisismymommys@gmail.com"}
    ]; 

    return (
        <div className="peopleList">
            {peopleInfo.map((info) => (
                <PersonInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default PeopleInfoList;