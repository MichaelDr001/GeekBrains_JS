import Message from "./Message";

function App() {
  // const [messgeList, setMessageList] = useState ([])
  const name = 'Michael'
  return (
    <div className="wrapper">
      <Message name={name}/>
    </div>
  );
}

export default App;