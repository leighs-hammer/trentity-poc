export default function (req) {
	if (!req.userKey) {
		return {
			message: "No authorization provided",
			error: true,
		}
	}

	const {userKey, } = req
	return {userKey, accessToken, error: false}
}