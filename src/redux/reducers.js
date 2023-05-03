import { ADD_USER, REMOVE_USER, UPDATE_LAYOUT } from "./types";
import Store from "../stores/theaterLayout";

const initialState = {
  userMobileNumber: 0,
  theaterLayout: Store.Data.TheaterLayout,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userMobileNumber: action.data,
      };

    case REMOVE_USER:
      return {
        ...state,
        userMobileNumber: 0,
      };

    case UPDATE_LAYOUT:
      const arr = [...state.theaterLayout];

      for (let seat of action.seats) {
        var row = seat.split('')[0];
        var col = seat.split('')[1];
        for (let obj of arr) {
          if (obj.time === action.time && obj.date === action.date && obj.theater === action.theater) {
            for (let s of obj.seats) {
              if (s.row === row) {
                s.column[col - 1].isBooked = true;
              }
            }
          }
        }
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
