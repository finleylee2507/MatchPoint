import React from 'react'
import { Message } from './Message';
import messageData from '../../utilities/data/message.json'

export default function MessageList() {

  return (
    <div className="event-list">
      {Object.entries(messageData.messages).map((e, id) => (
        <Message
          key={id}
          messageData={e}
        />
      ))}
    </div>
  )
}
