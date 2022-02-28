import React from 'react';

function TheirMessage({ lastMessage, message }) {
  const isfirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      {isfirstMessageByUser && (
        <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {
        message?.attachments?.length > 0
          ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isfirstMessageByUser ? 4 : 48 }}
            />
          ) : (
            <div className="message" style={{ float: 'left', backgroundColor: '#cabcdc', marginLeft: isfirstMessageByUser ? 4 : 48 }} >
              {message.text}
            </div>            
          )
        
      }
    </div>
  )
}

export default TheirMessage