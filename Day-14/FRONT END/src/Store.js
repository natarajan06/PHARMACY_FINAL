// import { createStore } from 'redux';


// const UPDATE_NAME = 'UPDATE_NAME';


// export const updateName = (newName) => {
//   return {
//     type: UPDATE_NAME,
//     payload: newName,
//   };
// };

// const initialState = {
//   name: 'nataraj', 
// };


// const nameReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create and export the Redux store
// const Store = createStore(nameReducer);

// export default Store;