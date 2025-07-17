import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Content from './components/Content';
import Nav2 from './components/Nav2';
function Header() {
  return (
    <header>
      <h1><a href="/">web</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/">web</a></li>
        <li><a href="/">CSS</a></li>
        <li><a href="/">JS</a></li>
      </ol>
    </nav>
  )
}

function Article() {
  return (
    <article>
      <h2>welcome</h2>
      Hello, web
    </article>
  )
}

function App() {
  return (
    <div className="App">
      <Header></Header> {/* 컴포넌트 추가, 사용자 정의 태그 추가 */}
      <Header></Header>
      <Header></Header>
      
      <Nav></Nav>
      
      <Article></Article>
      <Subject></Subject>
      <Content></Content>
      <Nav2/>
    </div>
  );
}

export default App;
