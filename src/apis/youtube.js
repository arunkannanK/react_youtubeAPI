import axios from 'axios';

const KEY = 'AIzaSyCJyvTfXqHL3S-w-nUVPQiISWtvZc9zX0g';
export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResult:10,
		key:KEY
	}

});

