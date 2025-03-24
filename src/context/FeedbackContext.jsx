import {createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();  //create context and inside this have provider method



                            // children is mean <App/>
export  const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        // {id:1,
        // text:"hello-1 context"
        //  },
        // {id:2,
        // text:"hello-2 context"
        //  },
        // {id:3,
        // text:"hello-3 context"
        //  }
      ]);

    // for edit state 
      const [feedbackEdit, setfeedbackEdit] = useState({
        item:{},
        edit:false
      })

      // calling useEffect HOOK its work on refresh the page, add dependence arry in it , otherwise it run like loop 
      useEffect( ()=> {
        fetchFeedback();
      },
      []);

      //Fetch data
      const fetchFeedback = async ()=> {
        const  response =  await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setFeedback(data);
      }
      // fetchFeedback();

      // upate item 
      const updateFeedback = async(id, updateItem)=> {
        const  response =  await fetch(`http://localhost:3000/posts/${id}`, {
          method:"PUT",
          headers:{
            "Content-type":"application/json",
          },
          body: JSON.stringify(updateItem)

        })
        const data = await response.json();
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...data} : item));
        setfeedbackEdit({
          item:{},
          edit:false
        });
      }


      //edit item
      const editfeedback = (item)=> {
        setfeedbackEdit({
          item:item,
          edit:true
        })
      }

      const addFeedback = async (newFeedback) =>{
        // const newFeedback = {
          // id:feedback.length +1,
          // newFeedback.id = uuidv4();
          const  response =  await fetch("http://localhost:3000/posts", {
            method:"POST",
            headers:{
              "Content-type":"application/json",
            },
            body: JSON.stringify(newFeedback)

          })
          const data = await response.json();
          // console.log(data);

          setFeedback([...feedback, data]);
        };

      const deleteFeedback = async(id) => {
        if(window.confirm("Are you sure to delete ?")){
          const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method:"DELETE"
          })
          setFeedback(feedback.filter(item => item.id !== id));

        }
      }


    //  call provider method and import FeedbackProvider in main.js at top level
      return (
        <FeedbackContext.Provider value={{
          feedback, 
          editfeedback, 
          feedbackEdit,
          deleteFeedback, 
          addFeedback, 
          updateFeedback
          }}>
            {children}

        </FeedbackContext.Provider>

      )
}

// exporting FeedbackContext for using values of it 
export default FeedbackContext