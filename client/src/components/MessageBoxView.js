import React, { useState, useEffect } from 'react'
import defaultProfile from '../assets/images/defaultProfile.png';
import IconEmojiSmile from '../assets/icons/IconEmojiSmile'
import IconAttach from '../assets/icons/IconAttach';
import IconMic from '../assets/icons/IconMic';
import { getMessages } from '../api/chatCalls';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'


const MessageBoxView = ({onMessageSent,messages,setMessages}) => {
    // const [messages, setMessages] = useState();
    const [textMessage, setTextMessage] = useState('');
    const usernameLoggedIn = useSelector(state => state.auth.value.user.username)


    const sendMessage = async (event) => {
        if (event.key === 'Enter' && textMessage !== '' && textMessage !== undefined) {
            // const time = format(new Date(), 'hh:mm')

            try {
                // await sendTextMessage
                setMessages([{
                    'message': textMessage, 'sender': usernameLoggedIn,
                    'createDate': Date.now()
                }, ...messages])
                await onMessageSent(textMessage)
                setTextMessage('');
                
            }
            catch (err) {

            }
        }
    }

    //JSON DATA INITAL LOADING ... 

    // useEffect(() => {
    //     async function fetchMessages() {
    //         await getMessages()
    //             .then(response => {
    //                 setMessages(response.data);
    //             })
    //             .catch(err => {
    //                 console.log(err.response.data);

    //             })

    //     };
    //     fetchMessages();
    // }, []);

    return (
        <div className='message-box'>
            <MessageNav />

            <div className='mes'>
                <div className='message-box__messages'>
                    {messages && messages.map((message, id) =>
                        <Message key={id}
                            sender={message.sender.username}
                            text={message.message}
                            // time={new Date(message.createDate)}
                            time={message.createDate}
                            image={defaultProfile}
                            messageOwned={message.sender === usernameLoggedIn}
                        />)}
                </div>
            </div>
            {/* SEND MESSAGE */}
            <div className='message-box__input-bar'>
                <div>
                    <IconAttach size='20px' fill='#fff' />
                </div>
                <div>
                    <IconEmojiSmile size='20px' fill='#fff' />
                </div>
                <input placeholder='Send a message'
                    onChange={(e) => setTextMessage(e.target.value)}
                    onKeyDown={sendMessage}
                    value={textMessage}
                />
                <div>
                    <IconMic size='20px' fill='#fff' />
                </div>
            </div>

        </div>
    )
}

export default MessageBoxView

const MessageNav = () => {

    return (
        <div className='nav message-nav'>

        </div>
    )
}

const Message = ({ image, sender, text, messageOwned, time }) => {

    // const [messageOwner,setMessageOwner] = useState(false);

    return (
        <div className={`message-block ${messageOwned ? 'reverse' : ''}`}>
            <div >
                <img className='message-block__img' src={image} />
            </div>
            <div className='message-block__content'>
                <h2 className='message-block__content-header'>
                    {sender}
                </h2>
                <div className="message-block__content-text">
                    {text}
                    <h5>
                        {format(new Date(time), 'hh:mm')}
                    </h5>
                </div>
            </div>

        </div>
    )
}

