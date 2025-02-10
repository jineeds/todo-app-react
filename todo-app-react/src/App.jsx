import { useState } from 'react';
import './App.css';

function App() {
  // hook사용

  // 2. 할 일 목록 표시 - 입력된 할 일을 목록 형태로 보여주는 기능
  const [todos, setTodos] = useState([
    { id: 1, title: '할일추가1', completed: false },
    { id: 2, title: '할일추가2', completed: true },
  ]);

  // 1. 할일 목록 생성 - 사용자가 새로운 할 일을 입력할 수 있게 하는 기능
  const 할일추가 = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      alert('!');

      // todos.push({ id: 3, title: 'xxx', completed: false });

      // 완료 상태에서 변경 함수 처리
      const newTodo = { id: 3, title: 'new todo', completed: false };
      // 불변성을 지켜서 업데이트 필요함 - 중요한 개념
      setTodos([...todos, newTodo]);
      // 아래 3줄을 위 한줄로 요약 가능
      // const newTodos = [...todos]; // ...todos => 기존 배열을 복사(불변성유지)
      // newTodos.push(newTodo);
      // setTodos(newTodos); //상태 업데이트
    }
  };
  // 3. 할 일 완료 표시 - 할 일의 완료 상태를 표시 및 변경할 수 있는 기능
  const 할일완료토글 = (todo) => {
    setTodos(todos.map((todo) => (todo === todo ? { ...todo, completed: !todo.completed } : todo)));
  };

  // 4. 할 일 개수 표시 - 전체 및 남아있는 할일의 개수를 표시하는 기능
  const numRemainingTodos = todos.filter((todo) => todo.completed).length;

  // 5. 할 일 삭제 - 목록에서 특징 할 일을 삭제하는 기능
  // 6. 할 일 수정 - 이미 입력된 할 일의 내용을 수정하는 기능
  // 7. 할 일 필터링 - 이미 완료된 할 일과 진행중인 할일을 구분하여 볼 수 있는 필 터 기능
  // 8. 하일 일괄 완료 처리 - 모든 할 일을 한번엔 완료 처리할 수 있는 기능
  // 9. 할 일 일괄삭제 - 완료된 할 일 만을 선택적으로 일고라 삭제하는 기능
  // 10. 지속성 - 데이터를 지속적으로 저장하여 웹 페이지 새로고침 후에도 할일 목록을유지

  return (
    <>
      <input type="text" placeholder="할일을 입력해주세요." onKeyDown={할일추가} />

      {/* // 2. 할 일 목록 표시 - 입력된 할 일을 목록 형태로 보여주는 기능 */}
      {todos.map((todo) => (
        <div key={todo.key}>{todo.title}</div>
      ))}
      {todos.map((todo) => (
        <input key={todo.key} type="checkBox" checked={todo.completed} onChange={할일완료토글} />
      ))}

      <div>남은 할일 : {numRemainingTodos}</div>
    </>
  );
}

export default App;
