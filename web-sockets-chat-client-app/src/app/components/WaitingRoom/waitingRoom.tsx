"use client";

import { FunctionComponent, useState } from "react";

interface Props {
  joinChatRoom: Function;
}

export const WaitingRoom: FunctionComponent<Props> = ({ joinChatRoom }) => {
  const [username, setUsername] = useState<string>("");
  const [chatroom, setChatroom] = useState<string>("");

  return (
    <form
      className="self-center w-1/2 border p-6 rounded-xl"
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(username, chatroom);
      }}
    >
      <div className="border-b border-white-900/10">
        <h2 className="text-base font-semibold leading-7 text-gray-100">
          Connection to chat
        </h2>
        <div className="my-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Username
          </label>
          <div className="mt-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-100 placeholder:text-gray-400 text focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="JohnDoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="my-6">
          <label
            htmlFor="chat"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Chat
          </label>
          <div className="mt-2 flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              type="text"
              name="chat"
              id="chat"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Team 44"
              value={chatroom}
              onChange={(e) => setChatroom(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="float-right mt-6 rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Join
      </button>
    </form>
  );
};
