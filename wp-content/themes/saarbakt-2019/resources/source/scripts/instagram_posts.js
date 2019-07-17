import axios from 'axios';

// Don't execute the script at all if there's no instagram posts container.
if(document.getElementById('sb-instagram-posts')) {
	const user_id = '6319246817';
	const client_id = '59737d655a0e4ef584393a2a1324a0a6';
	const access_token = '776426415.59737d6.ba93ad3784e24be2a0cac5b71c99f98d';
	const api_url = `https://api.instagram.com/v1/users/${user_id}/media/recent/?access_token=${access_token}`

	async function fetchInstagramPosts() {
		let response = await axios.get(api_url);

		console.log(response);
	}

	fetchInstagramPosts();
}