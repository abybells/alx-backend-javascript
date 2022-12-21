export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({
				status: 200,
				bodey: 'Success',
			});
		}
		reject(new Error('The fake API is not working currently'));
	});
}
