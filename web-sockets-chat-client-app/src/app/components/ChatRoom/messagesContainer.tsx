import { FunctionComponent } from "react";
import { IMessage } from "./chatRoom";
import { TextMessage } from "./textMessage";

interface Props {
  messages: Array<IMessage>;
}

export const MessagesContainer: FunctionComponent<Props> = ({
  messages
}) => {
  return (
    <div className="flex flex-col gap-2">
      {
        messages.map((msg, index) =>
          <TextMessage key={index} message={msg}/>
        )
      }
    </div>
  );
}
