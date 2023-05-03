import { ADD_USER, REMOVE_USER, UPDATE_LAYOUT } from "./types";

const signIn = (data) => {
  return {
    type: ADD_USER,
    data: data,
  };
};

const signOut = () => {
  return {
    type: REMOVE_USER,
  };
};

const updateLayout = (time, date, theater, seats) => {
  return {
    type: UPDATE_LAYOUT,
    time: time,
    date: date,
    theater: theater,
    seats: seats,
  };
};

export { signIn, signOut, updateLayout };