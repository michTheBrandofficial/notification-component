
import Message from './Message';
import '@styles/Messages.css';
import {data} from '@utils/data.json';
import images, { imageChess } from '@utils/images.js';

/**
 * @typedef {import('nixix-types').MutableRefObject} MutableRefObject
 * @param {{ref: MutableRefObject}} param0 
 * @returns 
 */
export default function Messages({ref}) {

  return (
    <section className="messages" bind:ref={ref} >
      {
        data.map((message, index) => {
          message.profilePhoto = images[index]
          message.commentPicture ? message.commentPicture = imageChess : null;
          // @ts-ignore
          return Message(message)
        })
      }
    </section>
  )
};

