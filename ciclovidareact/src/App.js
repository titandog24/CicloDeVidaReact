import './App.css';
import ComponentDidMount from './life-cycle/componentDidMount';
// import ComponentWillMount from './life-cycle/componentWillMount';
// import Render from './life-cycle/Render';



function App() {
  return (
    <div className="App">
      {/* <ComponentWillMount></ComponentWillMount>
      <Render></Render> */}
      <ComponentDidMount />
    </div>
  );
}

export default App;
