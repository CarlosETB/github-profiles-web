// Services
import api from "config/url";

const getUser = async (username: string) => {
    try {
        const users = await api.get(`users/${username}`)
            .then((response) => (response.data))
            .catch((e) => alert(e))

        return users
    } catch (e) {
        alert(e)
    }

    return {}
}

export { getUser }