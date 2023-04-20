import React, { useEffect, useMemo, useState } from "react";
import styled from 'styled-components';

const initialState = {
  //기본형식을 넣어주기위해 만듬
  id: 0,
  value: "여행가기",
};

function App() {
  const [todos, setTodos] = useState([initialState]);
  const [newTodo, setNewTodo] = useState("");
  const [editIdx, setEditIdx] = useState(-1);


  function handleSubmit(e) {
    e.preventDefault();
    if (editIdx === -1) {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 0;
      const newTodoItem = { id: newId, value: newTodo };
      setTodos([...todos, newTodoItem]);
    } else {
      todos[editIdx] = { ...todos[editIdx], value: newTodo };
      setTodos([...todos]);
      setEditIdx(-1);
    }
    setNewTodo("");
  }
  


  return (
    <div>
      <StInputGroup>
      <StAddForm onSubmit={handleSubmit}>
        <StAddInput
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <StAddButton type="submit">{editIdx === -1 ? "Add" : null }</StAddButton>
      </StAddForm>
      </StInputGroup>
      <StFormLabel>To-Do List</StFormLabel>
      <StListWrapper>
        {todos.map((todo, index) => (<StTodoContainer key={index}>{todo.value}</StTodoContainer>))}
      </StListWrapper>
    </div>
  );
}

export default App;




const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  display: block;
  text-align: center;
  margin:10px;
  font-size: 30px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  margin:10px;
  border: 1px solid gray;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;


const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 24px 24px;
  gap: 12px;
`;

const StTodoContainer = styled.div`
    width: 150px;
    border: 1px solid teal;
    min-height: 30px;
    border-radius: 12px;
    padding: 12px 24px 24px;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;