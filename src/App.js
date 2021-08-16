import './App.css'
import {useState} from 'react'

function App() {

  const [range,setRange]= useState(10);
  const [uppercase,setUpperCase]=useState(false);
  const [numbers,setNumbers]=useState(false);
  const [symbols,setSymbols]=useState(false);

  const [output,setOutput]=useState("Output");

  function rangeinpsetter(e){
    setRange(e.target.value);
    console.log(typeof range);

  }



  function Uppercheckhandler(e){

    if(e.target.checked)
    {
      setUpperCase(true);
    }
    else{
      setUpperCase(false);
    }

  }

  function numberCheckHandler(e){
    if(e.target.checked)
    {
      setNumbers(true);
      console.log("checked");
    }
    else{
      setNumbers(false);
      console.log("unchecked");
    }

  }

  function symbolCheckHandler(e)
  {
    if(e.target.checked){
      setSymbols(true);
    }
    else{
      setSymbols(false);
    }
  }

  function arrayFromLowToHigh(a,b)
  {
    let arr=[];

    for(let i=a;i<=b;i++)
    {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }

  function formHandler(e){
      let finalarr= arrayFromLowToHigh(97,122);
      let password="";


      if(uppercase)
      {
        finalarr= finalarr.concat(arrayFromLowToHigh(65,90));
      }

      if(numbers){
        finalarr= finalarr.concat(arrayFromLowToHigh(48,57));
      }

      if(symbols){
        finalarr= finalarr.concat(arrayFromLowToHigh(33,47));
      }

      

      for(let i=1;i<=range;i++)
      {
        const randomnum= Math.floor(Math.random()*(finalarr.length));
        password+= finalarr[randomnum];
        
      }
      setOutput(password);


      

      

      

      

      
  }

  
  return (
    <div className="App flexc">
      <h2 style={{color:"white",textAlign:"center"}}>Password Generator</h2>
      <div style={{textAlign:"center",paddingTop:"10px"}} id="output">{output}</div>

      <form id="passwordGeneratorForm " class="form">
        
      <label >Number Of Characters:</label>
      <input onChange={rangeinpsetter} id="range-inp" type="range" min="1" max="30" />
      <span id="range">{range}</span><br/>
      


      <div className="flexe">
      <label className="input-width">Include UpperCase</label>
      <input onChange={Uppercheckhandler} type="checkbox"/><br/>
      </div>

      <div className="flexe">
      <label className="input-width" >Include Numbers</label>
      <input onChange={numberCheckHandler} type="checkbox"/><br/>
      </div>

      <div className="flexe">

      <label className="input-width" >Include Symbols</label>
      <input onChange={symbolCheckHandler} type="checkbox"/><br/>
      </div>

      <button type="button" onClick={formHandler}>Generate Password</button>




        
    </form>


      
    </div>
  );
}

export default App;
