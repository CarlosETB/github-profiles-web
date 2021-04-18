// Services
import api from "config/url";

const getRepos = async (username: string) => {
    try {
        const users = await api.get(`users/${username}/repos`)
            .then((response) => (response.data))
            .catch((e) => alert(e))

        return users
    } catch (e) {
        alert(e)
    }

    return {}
}

export { getRepos }