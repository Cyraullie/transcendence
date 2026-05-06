export type friendApiT = {
	user: {
		id: number;
		username: string;
		is_online: boolean;
	};
	status: string;
	accepted_at: string;
};