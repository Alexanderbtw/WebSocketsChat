import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";

interface Props {
  sendMessage: Function;
}

export const SendMessageForm: FunctionComponent<Props> = ({ sendMessage }) => {
  const [msg, setMessage] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(msg);
        setMessage('');
      }}
    >
      <label
        htmlFor="message"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Message
      </label>
      <div className="relative">
        <input
          type="message"
          id="message"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Message"
          value={msg}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={!msg}
          className="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-1.5 disabled:bg-indigo-800"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};
