import logo from './logo.svg';
import './App.css';
import Subject from "./Comonents/Subject";
import Nav2 from "./Comonents/Nav";
import Student from "./Comonents/Student";
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.JPG"
import img3 from "./image/img3.JPG"


function Header(props){ //컴포넨트에 매개변수 설정하면 컴포넌트를 사용하는 쪽에서 속성으로 전달된 객체를 받을 수 있음
    console.log(props)
    console.log(props.title)

  return (
      <header>
        <h1><a href="/">{props.title}</a></h1>
      </header>
  )
}
function Nav(){
  return(
      <nav>
        <ol>

        </ol>
      </nav>
  );
}
function Article(){
  return(
      <article>
        <h2>welcome</h2>
        Hello, Web
      </article>
  )
}
function App() {
    const  title="props연습";
    let content = "내용";

    const studentInfo = {
        name: "홍길동",
        age: 20,
        year: 4,
        address: "서울"
    };


  return (
      <div className="App">
        <Header title={'리액트'}></Header>{/**컴포넌트 추가, 사용자 정의 태그 추가 */}
        <Nav></Nav>
        <Article></Article>
          {/*속성=값 속성=값 형태로 여러개의 값 전달 가능*/}
          <Subject title={title} sub="부제목" content={content}></Subject>
          <Subject></Subject>
          <Student info={studentInfo}></Student>

          <img src={img1} alt="img" width="100" height="100"/>
          <img src='/assets/img1.jpg'/>
      </div>
  );
}
export default App;







