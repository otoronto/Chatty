import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SockJS from 'sockjs-client'
import { over } from 'stompjs'
import Button from './Button';
import ChatList from './ChatList';
import Input from './Input';
import MessageBoxView from './MessageBoxView';
import { getMessages } from '../api/chatCalls';

var stompClient = null;

const Chatroom = () => {

  const user = useSelector(state => state.auth.value.user)
  const { username } = user

  const [userData, setUserData] = useState({ ...user })
  // const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (username !== '') {
      registerUser()
      loadMessages()


    }
  }, [])
  const registerUser = (event) => {
    let Sock = new SockJS('http://10.5.51.64:8080/chat');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError)
  }
  const onConnected = () => {
    setUserData({ ...userData, connected: true })
    stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
  }

  const loadMessages = async () => {
    try {
      const response = await getMessages();
      setMessages(response.data.content);
    } catch (err) {
      console.log('Failed to load messages');
      console.log(err);
    }
  }

  const onPublicMessageReceived = (payload) => {
    // console.log(JSON.parse(payload.body))
    let payloadData = JSON.parse(payload.body);
    // chats.push(payloadData)
    // setChats([...chats])

    if (payloadData.sender !== username) {
      // setMessages([{
      //   'message': payloadData.message, 'sender': payloadData.sender,
      //   'createDate': payloadData.createDate
      // }, ...messages])
      loadMessages();
    }
  }
  const onError = (err) => {
    // console.log(err)
  }
  const sendPublicMessage = (message) => {
    if (stompClient) {
      let chatMessage = {
        sender: userData.username,
        message: message,
        // createDate:format(Date.now(),());
      }
      stompClient.send('/message-destination/message', {}, JSON.stringify(chatMessage));
      // stompClient.send('/message', {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, 'message': '' });
    }
  }
  return (
    <>
      <div className='row'>
        <div className='col-4 chat-list'>

          {/* <ChatList text={messages[messages.lastIndexOf].message}/> */}
          <ChatList room='room 1' text={messages[0]?.message}/>
        </div>
        <div className='col-8 message-box'>
          <MessageBoxView messages={messages} setMessages={setMessages} onMessageSent={sendPublicMessage} />
        </div>
      </div>
    </>
  )
}

export default Chatroom