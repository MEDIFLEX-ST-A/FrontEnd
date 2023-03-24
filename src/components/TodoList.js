import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import plusButton from "../assets/imgs/plusbutton.png";
 
const TodoListBlock = styled.div`
  margin-bottom: 330px;
  padding-bottom: 5px;
`;

const TodoItemBox = styled.div`
  margin-top: 12px;
  margin-bottom: 10px;
  border-radius: 16px;
  width: 220px;
  height: 80px;
  border: 0.5px solid black;
  align-items: center;
`;

const PlusButton = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  margin-left: 99px;
  margin-top: 27px;
`;


function TodoList() {
    return (
        <TodoListBlock>
            <TodoItemBox>
                <TodoItem text1="[LIFE 실시간 인기 게시글]"
                text2="직전주 LIFE 신규 게시글 리뷰하기" done={false} />
            </TodoItemBox>
            <TodoItemBox>
                <TodoItem text1="[LIFE 실시간 인기 게시글]"
                text2="1분기 페이지 이탈률 정리 후 보고" done={false} />
            </TodoItemBox>  
            <TodoItemBox>              
                <TodoItem text1="[ONAIR 콘텐츠 관리]"
                text2="ONAIR 콘텐츠 실시간 모니터링" done={false} />
            </TodoItemBox>
            <TodoItemBox>
                <PlusButton img src={ plusButton } />
            </TodoItemBox>
        </TodoListBlock>       
    );
}
 
export default TodoList;