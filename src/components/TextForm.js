// rfc
// useState is a hook cocept
import React,{useState} from "react";

export default function TextForm(props) {
    const handlecount=(text)=>{
        // console.log("Uppercase was clicked:"+text);
        const wordArray=text.split(' ').filter(word => word.trim() !== '');;
        return wordArray.length;
        // props.showAlert("Converted to UpperCase","success");
    }

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked:"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked:"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCharClick=()=>{
      let newText = text.split(' ').map(word => word.split('').join(' ')).join('   ');
      setText(newText);
      props.showAlert("Converted to characters","success");
    }

    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extraspaces removed","success");
    }

    const handleOnchange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    // text="new text"; wrong way to change the state
    // setText("new text");correct way to change the state
    return (
      <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
          {/* {{}} for objects {} for javascript */}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCharClick}>Convert to Char</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{handlecount(text)} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
