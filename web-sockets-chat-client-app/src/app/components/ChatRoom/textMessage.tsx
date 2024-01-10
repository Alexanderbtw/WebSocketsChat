import { FunctionComponent } from "react";
import { IMessage } from "./chatRoom";

interface Props {
  message: IMessage;
}

export const TextMessage: FunctionComponent<Props> = ({
  message,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg p-2 w-fit">
      <b>{message.username}</b>: <span>{message.message}</span>
    </div>
  )
}
