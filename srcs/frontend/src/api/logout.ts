import status from '../api/login_status'

export async function logout() {
	if (status.logged_in) {
		localStorage.clear();
	}
}