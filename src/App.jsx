import { useState } from 'react';
import './App.css'
//컴포넌트의 단위 
//컴포넌트의 이름은 항상 대문자 시작
function App() {
  //자바스크립트 영영
  // 아래에 있는 html에서 사용할 변수를 선언
  // html 내부에서 변경이 일어나는 모든 변수는 state로 선언한다.
  // state로 선언한 변수는 항상 setter로 수정한다.
  const [title, setTitle] = useState();

  return (
    // App 컴포넌트를 호출할 때 돌려줄 html 내용
    // return 내부에는 무조건 태그 하나로 전체를 감싸야 한다
    // html에서 css 접근자로 class -> className

    <>
      <div className="app">
        <div className="black-bg">리액트로 만들어보는 블로그</div>
        <div className="list"></div>
      </div>
    </>
  );
}

export default App
