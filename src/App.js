import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent'; //외부 컴포넌트 불러오기
function App() {
  return (
    //기존 내용을 지우고 신규 JSX 코딩을 추가한다.(아래)
    <div>
      <img src="http://wwww.easyspub.co.kr/images/logo_footer.png" />
      <div>자바스크립트 안에 HTML태그를 사용할 수 있다.</div>
      <ChildComponent />
    </div>
  );
}
export default App;
