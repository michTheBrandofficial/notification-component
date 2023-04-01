import gameChess from '@assets/images/image-chess.webp';

/**
 * @typedef {{read: boolean, profilePhoto: string, sender: string, actualMessage: 'post' | 'follow' | 'group' | 'private' | 'comment' | 'leftGroup' | string, augmentMessage?: string, augmentMessageType?: 'group', date: string, messageBody?: JSX.Element | string, commentPicture?: string}} Message
 */

/**
 * 
 * @param {Message['actualMessage']} actualMessage 
 */
function checkActualMessage(actualMessage) {
  return actualMessage === 'post' ? 'reacted to your post' : actualMessage === 'follow' ? 'followed you' : actualMessage === 'group' ? 'has joined your group' : actualMessage === 'private' ? 'sent you a private message' : actualMessage === 'comment' ? 'commented on your picture' : actualMessage === 'leftGroup' ? 'left the group' : '';
}


/**
 * @param {Message} param0 
 * @returns 
 */
export default function Message({read, profilePhoto, sender, actualMessage, augmentMessage, augmentMessageType,date, messageBody, commentPicture}) {
  return (
    <section className={read ? 'message' : 'message unread'}>
      <img src={profilePhoto} alt="" className="img profile-photo" />
      <section className="other-info">
        <div className="text">
          <h4 className='sender' >{sender}</h4>
          <p className='actual-message' >{checkActualMessage(actualMessage)}</p>
          {
            augmentMessage ? <h4 className={augmentMessageType !== 'group' ? 'augment-message' : "augment-message group"}>{augmentMessage}</h4> : ''
          }
          {
            read ? '' : <div className="unread-marker"></div>
          }
        </div>
        <p className="date">{date} ago</p>
        {
          messageBody ? <p className="message-body">{messageBody}</p> : ''
        }
      </section>
      {
        commentPicture ? <img src={commentPicture} alt="" className="img comment-picture" /> : ''
      }
    </section>
  )
};
