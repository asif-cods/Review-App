// import React, { use, useState } from 'react'

// const Form = ({handleInput}) => {

//     const [text, setText] = useState("")

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if(!text.trim()) return;
//         handleInput(text);
//         setText('');
//     };

//   return (
//     <div className="card" onSubmit={onSubmit}>
//         <form className='card-wrapper'  >
//             <input style={ {width: "522px", height: "50px", padding:"20px"} }value={text} type="text" id='input-text'
//              onChange={(e) => setText(e.target.value)} placeholder="Enter Review"/>  {/* // Updates state as user types */}
//             <button className='btn btn-primary' type='submit' >Add</button>
//         </form>
//     </div>
//   )
// }

// export default Form


import React, { useContext, useEffect, useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import FeedbackContext from '../context/FeedbackContext'


const Form = () => {
  const {addFeedback, updateFeedback, feedbackEdit} = useContext(FeedbackContext);  // destructure the context from the FeedbackContext

  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) =>{
    const trimmedText = e.target.value.trimStart();
    let textError = "";
    if(trimmedText.length < 10){
      textError = "Enter at least 10 Letter";
      setMessage(textError);
      setBtnDisable(true);
    }else{
      setMessage(textError);
      setBtnDisable(false);
    }

    setText(trimmedText);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(text);
    const newFeedback = {
      text
    }
    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback);
    }else{
      addFeedback({text});
    }
    setBtnDisable(true);
    setText("");
  }
  
  //useeffect (side effect) , when ever feedbackEdit.edit === is changed , somthing happen, (we have to run the and useEffect)( add text in input ))
  useEffect( ()=>{
    if(feedbackEdit.edit === true){
      setBtnDisable(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit])

  return (
    <Card>
      <h3>Add Your Review</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="Enter Here" id="input-text" value={text} onChange={handleTextChange}/>

          <Button version="primary" type="submit" isDisabled={btnDisable}>Add</Button>
        </div>
        <p className="message">{message && message}</p>
      </form>
    </Card>
  )
}

export default Form