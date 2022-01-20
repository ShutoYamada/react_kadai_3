import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //ここでは、reducerを書きます。
    //todoを追加
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //todoを削除
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //todoを更新
    // updateTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         item: action.payload.item,
    //       };
    //     }
    //     return todo;
    //   });
    // },
    // completeTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         completed: true,
    //       };
    //     }
    //     return todo;
    //   });
    // },
  },
});
//export const { addTodos, removeTodos, updateTodos, completeTodos } =
// addTodoReducer.actions;
export const { addTodos, removeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
