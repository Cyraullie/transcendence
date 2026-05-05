import axios from 'axios'
import host from '../api/host'

export async function refreshAuth() : Promise<boolean> {

	try {
		const res = await axios.post('http://' + host.host_ip + ':8000/api/token/refresh/', { 'refresh': localStorage.getItem('refresh')});
		localStorage.setItem('access', res.data['access']);
		return true;
	} catch {
		localStorage.clear();
		return false;
	}
}

export async function checkAuth() : Promise<boolean> {

	try {
		const res = await axios.post('http://' + host.host_ip + ':8000/api/token/verify/', { 'token': localStorage.getItem('access')});
		res;
		return true;
	} catch {
		const res = await refreshAuth();
		if (!res)
			return false;
		return true;
	}
}