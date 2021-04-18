// Services
import api from "config/url";

const getAllUsers = async () => {
    try {
        const users = await api.get('users')
            .then((response) => (response.data))
            .catch((e) => alert(e))

        return users
    } catch (e) {
        alert(e)
    }

    return {}
}

export { getAllUsers }