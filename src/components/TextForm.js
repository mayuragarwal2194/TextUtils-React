import React, { useState } from 'react'


export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  // const handleCapClick =() => {
  //   let newText = [];
  //   newText = text.charAt(0).toUpperCase() + text.slice(1);
  //   setText(newText);
  // }

  const handleClrClick = () => {
    setText(""); 
    props.showAlert("Textarea has been cleared!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container' style={{color: props.mode === 'light' ? '#212529': 'white'}}>
        <div className="my-5">
          <label htmlFor="myBox" className="form-label">
            <h1> {props.heading} </h1>
          </label>
          <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white': '#042743', color: props.mode === 'light' ? '#212529': 'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
          <button className='btn btn-primary mt-3' onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className='btn btn-primary mt-3 ms-3' onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className='btn btn-primary mt-3 ms-3' onClick={handleClrClick}>
            Clear Text
          </button>
          {/* <button className='btn btn-primary mt-3 ms-3' onClick={handleCapClick}>
            Capitalize
          </button> */}
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'light' ? '#212529': 'white'}}>
        <h1>Your text summary</h1>
        <p>{text ? text.split(" ").length : text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>It will take {0.008 * text.split(" ").length} Minutes to Read</p>
        <div>
          <h2>Preview</h2>
          <p> {text.length > 0 ? text : "Enter something in the textbox above to preview here."} </p>
        </div>
      </div>
    </>
  )
}
