import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Form from './components/Form';
import Footer from './components/Footer';
import ThemeContext from './components/ThemeContext'



function App() {

  const {theme} = useContext(ThemeContext);
  // console.log(theme);

  const [feedback, setFeedback] = useState([
    {id:1,
    text:"hello-1"
     },
    {id:2,
    text:"hello-2"
     },
    {id:3,
    text:"hello-3"
     }
  ]);
  // console.log(feedback);


 
    // setFeedback([...feedback, newFeedback]);  }; // Updates state with new feedback

  return (
    <div>
 
      <Header Color="white">
        </Header>     
      <div className="container">
        <main>
          <Form />
          {/* <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> */}
          <FeedbackList />
        </main> 
        
      </div>
      <Footer/>

    </div>

  )
}

export default App
