import Messages from '@components/Messages';
import '@styles/App.css';
import { callRef } from 'nixix';

export default function App()  {
	const messages = callRef(null);
	const readButton = callRef(null);
	function readAll() {
		messages.current.querySelectorAll('.unread').forEach(message => {
			message.classList.remove('unread')
		});
		// @ts-ignore
		readButton.current.textContent = '0';
	}

	return (
		<section className="notifi-comp">
			<section className="header">
      	<div className="container">
      	  <h1>Notifications</h1>
      	  <button bind:ref={readButton} >3</button>
      	</div>
      	<p on:click={readAll} >Mark all as read</p>
    	</section>
			<Messages ref={messages} />
		</section>
	)
};
