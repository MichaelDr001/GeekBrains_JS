import React, {useEffect, useState, useRef} from "react";
import Chats from "./Chats";
import Message from "./Message";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { pink } from '@mui/material/colors';
import { List } from "@mui/icons-material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: pink[900],
            light: pink[900],
        },
    },
});

function App() {
  const ref = useRef(null)
  const inputRef = useRef('')
  const [messageList, setMessageList] = useState ([])
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessges] = useState([]);
  const [chatList] = useState([
    {name: 'Some chat', id: '1'},
    {name: 'Complicated discussion', id: '2'},
    {name: 'Discriptions and documentation', id: '3'}
  ])
  const onButtonClick = () => {
    let newId = 1
    if (messages.length > 0) newId = messages(messages.length - 1).id + 1
    if (author.length > 0) {
      setMessges(messages => [...messages, { text: message, author: author, id: newId }])
    } else {
      alert('Author Name incorrect')
    }
  }


function handleSubmit(event) {
  event.preventDefault();
  const target = event.target;
  const author = target.author.value;
  const text = target.text.value;

  setMessageList(prev => [...prev, {
  id: giveLastId(prev),
  author: author,
  text: text,
  }])
}

function giveLastId(array) {
  return array.length ? array[array.length - 1].id + 1 : 0;
}

useEffect( () => {
  if (messages.length > 0) {
    setTimeout(() => {
      alert(author + ', your message sending')
      // botAnswer(messageList);
    }, 2500);
  }
  focusTextField(inputRef.current)
}, [messages, author])


function focusTextField (input) {
  if (input) {
    input.focus()
  }
}

// function botAnswer() {
//   const lastAuthor = messageList[messageList.length - 1];
//   if (lastAuthor && lastAuthor.author) {
//       setMessageList(prev => [...prev, {
//           id: giveLastId(prev),
//           text: `Message from ${lastAuthor.author} was sended`,
//       }]);
//   }
//   ref.current.focus()
// }
  
  return (
<ThemeProvider theme = {theme}>
  <div className = "wrapper">
    <div className = "App main">
      <div className = "message-text">
        <Typography variant = "h5" component = "div" color = "primary">Chat list</Typography>
        <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
          {chatList.map((item) => <Chats name = {item.name} key = {item.id} />)}
        </List>
      </div>
      <div className="messges">
        <Box
          component='form'
          sx = {{ m: 1, borderRadius: '18px', gap: '10px', width: '400px', margin: '10px', padding: '15px'}}
          noValidate
          autoComplete = "off">
          
          <Typography variant = 'h5' component = 'div' color = 'primary'>messages</Typography>
          <TextField sx = {{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            id = 'outlined-multiline-flexible' fullWidth
            label = 'Author Name'
            multiline
            maxRows = {4}
            value = {author}
            inputRef = {inputRef}
            onChange = {(e) => setAuthor(e.target.value)} />
          <TextField sx = {{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            id = 'outlined-multiline-flexible' fullWidth
            label = 'Message'
            multiline
            maxRows = {4}
            value = {message}
            onChange = {(e) => setMessage(e.target.value)} />

          <Button sx = {{ margin: '10px 0 10px 0' }} variant = 'contained' size = 'large' fullWidth onClick={onButtonClick}>Send message</Button>
        </Box>
        {
          messages.map(item => {
            return (
              <Message author = {item.author} text = {item.text} key = {item.id} />
            )
          })
        }
      </div>
    </div>

    <div className="Second App">
      <Box component = "form" novalidate
        autoComplete = "off" mt = {4} display = "flex"
        flexDirection = "column" onSubmit = {handleSubmit}>
        <TextField id = "name" label = "Name"
          variant = "outlined" sx = {{ mb: 2 }}
          name = "author"
          inputRef = {ref} />
        <TextField id = "message" label = "Message"
          variant = "outlined" sx = {{ mb: 2 }}
          name = "text"
          inputRef = {ref}/>
        <Button variant = "contained" color = 'primary'
          size = "small" type = "submit" sx = {{ mo: 4 }}>Send</Button>
      </Box>
      <div className="message-list">
        {messageList.map( message => <div className = "message-list__item" key = {message.id}>
        { message.author && <p className="message-List__p"><span>Author:</span> {message.author}</p>} 
        <p className = "message-List__p">{ message.author && <span>Text:</span>} {message.text}</p>
        </div> )}
      </div>
    </div>
  </div>

</ThemeProvider>
  )
}

export default App;