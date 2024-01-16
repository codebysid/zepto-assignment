import React from "react";
import { SearchOptionsDataInterface } from "../constants";
import useReducerState from "../hooks/useReducerState";

interface UserProps {
  user: SearchOptionsDataInterface;
  handleFunction: (option: SearchOptionsDataInterface) => void;
  close?: boolean;
}

const User: React.FC<UserProps> = ({ user, handleFunction, close }) => {
  const { state } = useReducerState();
  return (
    <div
      onClick={() => handleFunction(user)}
      className={`flex flex-row items-center gap-2 cursor-pointer ${
        close ? "bg-gray-500 w-max py-1 px-4 text-white" : "w-full"
      } rounded-xl  hover:bg-gray-500 ${
        state.lastSelectedItem === user && "border-2 border-blue-500"
      }`}
    >
      <img
        className=" w-14 aspect-square object-cover rounded-full"
        src={user.userPicture}
        alt="Display Picture"
      />
      <p className=" text-xl">{user.username}</p>
      {close && <span>X</span>}
    </div>
  );
};

export default User;
