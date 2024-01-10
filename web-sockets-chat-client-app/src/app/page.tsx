"use client";

import { useState } from 'react';
import { WaitingRoom } from './components/WaitingRoom/waitingRoom'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ChatRoom, IMessage } from './components/ChatRoom/chatRoom';



export default function Home() {
  const [conn, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  async function joinChatRoom(username: string, chatroom: string): Promise<any> {
    try {
      const conn: HubConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:5033/Chat')
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username: string, chatroom: string) => {
        let message: string = `${username}, welcome to ${chatroom}`;
        setMessages(messages => [...messages, {username:"admin", message}]);
      });

      conn.on("ReceiveSpecificMessage", (username: string, message: string) => {
        setMessages(messages => [...messages, {username, message}]);
      })

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", {username, chatroom});

      setConnection(conn);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function sendMessage(message:string): Promise<any> {
    try {
      await conn?.invoke("SendMessage", message);
    }
    catch (err){
      console.log(err);
    }
  }

  return (
    <div className='container mx-auto flex min-h-screen flex-col justify-between py-6 gap-6'>
      <header>
        <h1 className='font-semibold text-3xl'>ChatApp</h1>
      </header>
      <main className='flex flex-col justify-between flex-grow'>
        {!conn
          ? <WaitingRoom joinChatRoom={joinChatRoom}/>
          : <ChatRoom messages={messages} sendMessage={sendMessage}/>
        }
      </main>
      <footer></footer>
    </div>

  )
}
