import { FunctionComponent } from "react";
import { MessagesContainer } from "./messagesContainer";
import { SendMessageForm } from "./sendMessageForm";

export interface IMessage {
  username: string;
  message: string;
}

interface Props {
  messages: Array<IMessage>;
  sendMessage: Function;
}

export const ChatRoom: FunctionComponent<Props> = ({
  messages,
  sendMessage,
}) => {
  return (
    <div className="bg-gray-500 rounded-xl flex flex-col flex-grow p-6 gap-6 justify-between">
      <div className="text-center bg-indigo-500 rounded-xl p-3">
        <h2>Chatroom Name</h2>
      </div>
      <div className="flex-grow">
        <MessagesContainer messages={messages}/>
      </div>
      <SendMessageForm sendMessage={sendMessage}/>
    </div>
  );
};
