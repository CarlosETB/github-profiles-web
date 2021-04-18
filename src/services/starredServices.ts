// Services
import api from "config/url";

const getStarred = async (username: string) => {
    try {
        const users = await api.get(`users/${username}/starred`)
            .then((response) => (response.data))
            .catch((e) => alert(e))

        return users
    } catch (e) {
        alert(e)
    }

    return {}
}

export { getStarred }