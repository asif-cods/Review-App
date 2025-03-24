import React, { useContext } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Card from './Shared/Card';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackItem = ({item}) => {
  const {deleteFeedback, editfeedback} = useContext(FeedbackContext);  // destructure the context from the FeedbackContext
    console.log(item);
  return (
    <Card>
        <div className="card-wrapper">
            <h4>{item.text}</h4>

            <div>
                <div className="edit">
                <FaRegEdit size="20px" color='orange' onClick={()=> editfeedback(item)}/>
                </div>
                <div className="delete">
                <MdDeleteOutline size="20px" color='orange' onClick={() => deleteFeedback(item.id)}/>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default FeedbackItem