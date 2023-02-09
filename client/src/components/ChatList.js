import React from 'react'
import defaultProfile from '../assets/images/defaultProfile.png';
import IconSearchOutline from '../assets/icons/IconSearchOutline'
const ChatList = ({room,text}) => {
  return (
    <div className='chatlist'>

      <ProfileNav />
      <div className='chat-list__search-input'>
        <div>
          <IconSearchOutline size='2rem' fill='#fff'/>
        </div>
        <input placeholder='search chat' />
      </div>

      <ChatListitem room={room} text={text}/>
      {/* <ChatListitem name='test3' text='yeah, probably so.'/> */}

    </div>
  )
}

export default ChatList


const ChatListitem = ({room,text,time}) => {
  return (
    <div className='chat-list__item' tabIndex="1">
      <div>
        <img className='chat-list__item__img' src={defaultProfile} />
      </div>
      <div className='chat-list__item__info'>
        <h4 className='chat-list__item__header'>
        {room}
        </h4>
        <h5 className='chat-list__item__text'>
        {text}
        </h5>
      </div>
      <div className='chat-list__item__time'>
        {time}
      </div>
    </div>
  )
}


const ProfileNav = () => {
  return (
    <h3 className='nav profile-nav'>
      CHATTY
    </h3>
  )
}