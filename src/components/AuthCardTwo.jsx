import React, { useState } from "react";

const AuthCardTwo = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="p-10 flex flex-col space-y-6">
      {cities.map((city) => {
        return (
          <CardBlock
            key={city.id}
            city={city}
            isActive={active === city.id}
            onShow={()=> setActive(city.id)}
          />
        );
      })}
      {/* <CardBlock cityName="Bhaktapur" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus."/>
    <CardBlock cityName="Kathmandu" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus."/>
    <CardBlock cityName="Biratnagar" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus."/>
    <CardBlock cityName="Dharan" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus."/> */}
    </div>
  );
};

const CardBlock = ({ city, isActive, onShow }) => {
    
  return (
    <div className="w-[300px] rounded-md shadow-lg">
      <h1 className="font-semibold">{city.name}</h1>
      {isActive && <p className="text-sm">{city.content}</p>}
      {!isActive && (
        <button
          onClick={onShow}
          className="cursor-pointer my-2 border rounded-md px-2 text-center"
        >
          Show - {isActive ? "Active" : "In Active"}
        </button>
      )}
    </div>
  );
};

export default AuthCardTwo;

const cities = [
  {
    id: 0,
    name: "Butwal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus.",
  },
  {
    id: 1,
    name: "Bhairahawa",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus.",
  },
  {
    id: 2,
    name: "Kathmandu",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus.",
  },
  {
    id: 3,
    name: "Dharan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in voluptas labore corporis ex delectus.",
  },
];
