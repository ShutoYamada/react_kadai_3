import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //ここでは、reducerを書きます。
    //todoを追加
    addTodos: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    },
    //todoを削除
    removeTodos: (state, action) => {
      return {
        ...state,
        todos: state?.todos?.filter((item) => item.id !== action.payload)
      }
    },
    //todoを更新
    updateTodos: (state, action) => {
      return {
        ...state,
        todos: state?.todos?.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              balance: action.payload.balance,
            };
          }
          return todo;
        })
      }
    },
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
export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
