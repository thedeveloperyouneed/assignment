import axios from 'axios';
import { API_HOST } from './constant';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const urlBuilder = (path) => {
	return `${API_HOST}/${path}`;
}

const API = {
	users: {
		list: () => {
			return axios.get(urlBuilder(`limit=100/json`))
			.then((res) => { return res; })
			.catch((err) => { return err; });
        },
		
    }
};

module.exports = API;
