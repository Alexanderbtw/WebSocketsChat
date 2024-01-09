"use client";

import { useState } from 'react';
import { WaitingRoom } from './components/WaitingRoom/waitingRoom'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export default function Home() {
  const [conn, setConnection] = useState<HubConnection>();

  async function joinChatRoom(username: string, chatroom: string) {
    try {
      const conn: HubConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:5033/Chat')
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username: string, message: string) => {
        console.log(username, message);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", {username, chatroom});

      setConnection(conn);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='container mx-auto flex min-h-screen flex-col justify-between py-6 gap-6'>
      <header>
        <h1 className='font-semibold text-3xl'>ChatApp</h1>
      </header>
      <main className='flex flex-col justify-between flex-grow'>
        <WaitingRoom joinChatRoom={joinChatRoom}/>
        {/* <div className='bg-gray-500 rounded-xl flex-grow p-6'></div> */}
      </main>
      <footer></footer>
    </div>

  )
}
