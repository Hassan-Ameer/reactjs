import about from "./assets/about";
import './App.css'


  const App = ()  => {
    const firstFunction = () => {
      alert ("hello world");
    };

  return (
   <>
   <about/>
   <about/>
   <about/>
   <about/>
   <h1 id="heading">heading</h1>
   <button  onClick={firstFunction}>call a function</button>
   </>
  );
};

export default App;
