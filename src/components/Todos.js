//addTodos　受取人
//comment 未完了の受取人
//count 送金者の残高
//num　送金者の入金及び出勤額
//balance 受取人の残高
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
//import { motion } from "framer-motion";
import { Box, TextField, Button } from "@material-ui/core";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const { count, setCount } = props;
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //const [count, setCount] = useState(0);
  const [num, setNum] = useState(100);
  const onCountUp = () => {
    setCount(count + num);
  };
  const onCountDown = () => {
    setCount(count - num);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  //console.log("todo text", todo);
  //console.log("props from store", props);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="balance-list">
          <h2>
            {/* {display.name} */}
            さんの残高 : {count} 円{" "}
          </h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="入出金額"
              variant="outlined"
              value={num}
              onChange={(e) => setNum(Number(e.target.value))}
            />
          </Box>
          <Button onClick={onCountUp} variant="outlined" color="primary">
            Increment
          </Button>
          <Button onClick={onCountDown} variant="outlined" color="secondary">
            Decrement
          </Button>
        </div>
        <div className="addTodos">
          <h2>受取人一覧</h2>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="受取人を入力してください"
              variant="outlined"
              type="text"
              onChange={(e) => handleChange(e)}
              className="todo-input"
              value={todo}
            />
          </Box>
          <Button
            variant="outlined"
            color="primary"
            className="add-btn"
            onClick={() => add()}
          >
            受取人追加
          </Button>
          <br />
          <h2>受取人名</h2>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
