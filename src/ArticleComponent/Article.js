//I used default statment here for expoert simple function
import {useState} from "react"; //state Declartion

export default function Article(props){
    const handleUpClick =()=>{
      //console.log("lowercase text is: "+text);
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const handleLoClick =()=>{
      //console.log("lowercase text is: "+text);
      let newtext=text.toLowerCase();
      setText(newtext);
    }
    const handleClearClick =()=>{
      let newtext="";
      setText(newtext);
    }
    const handleOnChange =(event)=>{
      //console.log("On change");
      setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here'); 
    return(
       <div className="container my-3">
        <div className="container">  
         <h1 style={{color:props.mode ==='dark'?'white':'#2E2E2E'}} >{props.heading}</h1>
         <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark'?'#2E2E2E':'white',color:props.mode ==='dark'?'white':'#2E2E2E'}} id="myBox" rows="6"></textarea>
         </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
         <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To Lowercase</button>
         <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3">
          <h3 style={{color:props.mode ==='dark'?'white':'#2E2E2E'}} >Your Text Summary</h3>
          <strong style={{color:props.mode ==='dark'?'white':'#2E2E2E'}} > Words:{ text.length === 0 ? 0 : text.split(" ").length } and Characters:{text.length-(text.split(" ").length-1)}</strong>
        </div>
       </div>
    );
}