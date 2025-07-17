
import './App.css';

function Header() {
  return (
    <div className="header">header</div>
  );
}

function Nav() {
  return (
    <div className="nav">nav</div>
  );
}

function Content() {
  return (
    <div className="content">content</div>
  );
}

function Footer() {
  return (
    <div className="footer">footer</div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
