import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent'; //외부 컴포넌트 불러오기
function App() {
  const funcAdd = (x,y) => {return x+y;};
  return (
    //기존 내용을 지우고 신규 JSX 코딩을 추가한다.(아래)
    <div>
      <img src="http://wwww.easyspub.co.kr/images/logo_footer.png" />
      <div>자바스크립트 안에 HTML태그를 사용할 수 있다.</div>
      <ChildComponent name="문자메세지"
        boolValue={true}
        //numValue={2}
        arrayValue={[1,2,3]}
        objValue={{id:'아이디',age:12}}
        nodeValue={<h1>태그노드</h1>}
        funcValue={funcAdd}
      >
        <h2>자식태그노드</h2>
      </ChildComponent>
    </div>
  );
}
export default App;
