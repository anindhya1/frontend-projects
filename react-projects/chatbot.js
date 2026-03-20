// const React = require("react");

function ChatInput({chatMessages, setChatMessages}) {

    const [inputText, setInputText] = React.useState('');

    function saveInputText(event){

        setInputText(event.target.value);
    }

    function sendMessage(){
        const newChatMessages =[
            ...chatMessages,
            {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
            }
        ];

        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
            ...newChatMessages,
            {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ]);

        setInputText('');
    }

    return (
      <div className="chat-input-container">
        <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText} value={inputText} className="chat-input"/>
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    );
  }

  function ChatMessage({message, sender}) {
    // const message = props.message;

    return(
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
        {sender === "robot" && (<img src="robot.png" width="50"></img>)}
        <div className="message-text">
        {message}
        </div>
        {sender === "user" && (<img src="user.png" width="50"></img>)}
    </div>
    );
  }

  function ChatMessages({chatMessages}){

        const chatMessagesRef = React.useRef(null);

        React.useEffect(() => {
            const containerElem = chatMessagesRef.current;
            if (containerElem){
                console.log("In if statement")
                containerElem.scrollTop = containerElem.scrollHeight;
            }
        }, [chatMessages]);

        return(
        <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
            return (
                <ChatMessage
                message={chatMessage.message}
                sender = {chatMessage.sender}
                key = {chatMessage.id}
                />
            );
        })}
        </div>
        );

  }


  function App(){
    const [chatMessages, setChatMessages] = React.useState(
        [{
        message: 'hello chatbot',
        sender: 'user',
        id: 1
    },{
        message: 'Hey! How can I help you',
        sender: 'robot',
        id: 2
    },{
        message: 'can you get me todays date?',
        sender: 'user',
        id: 3
    },{
        message: 'Today is Sept 27',
        sender: 'robot',
        id: 4
    }]);

    // const chatMessages = array[0];
    // const setChatMessages = array[1];
    
    return(
    <div className="app-container">
        <ChatMessages chatMessages={chatMessages}/>
        <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
    </div>
    );
  }

  const container = document.querySelector('.root');
  ReactDOM.createRoot(container).render(<App/>);
   