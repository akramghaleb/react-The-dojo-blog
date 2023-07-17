import './App.css';

function App() {
  const title = "welcome to new blog";
  const likes = 50;
  const googleLink = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Linked  { likes } times</p>
        <a href={googleLink}> Go to Google</a>
      </div>
    </div>
  );
}

export default App;
