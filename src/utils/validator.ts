export const validateUsername = (username?: string) =>
    username?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);