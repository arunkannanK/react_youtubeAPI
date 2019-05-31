import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers: {
		Authorization : 'Client-ID e69a221444bc655f428b251d14c870c60d61f9cee92a1b7377fd7a114688ba17'
	}
});