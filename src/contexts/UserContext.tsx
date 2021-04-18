import React, { createContext, ReactNode, useState } from "react";

// Services
import { getAllUsers, getUser, getRepos, getStarred } from 'services'

// Utils
import {
    UserProps,
    UsersProps,
    ReposProps,
    StarredProps
} from 'utils/interfaces'

interface UserContextProps {
    user?: UserProps;
    repos?: Array<ReposProps>;
    users?: Array<UsersProps>;
    handleGetAll: () => void;
    starred?: Array<StarredProps>;
    handleGetUser: (username: string) => void;
    handleGetRepos: (username: string) => void;
    handleGetStarred: (username: string) => void;
}

interface UserProviderProps {
    children?: ReactNode;
}

const UserContext = createContext({} as UserContextProps);

const UserProvider: React.FC<UserProviderProps> = (props) => {
    const { children } = props;

    const [users, setUsers] = useState<UsersProps[]>([])
    const [user, setUser] = useState<UserProps>()
    const [repos, setRepos] = useState<ReposProps[]>([])
    const [starred, setStarred] = useState<ReposProps[]>([])

    const handleGetAll = async () => {
        getAllUsers().then((res) => setUsers(res))
    }

    const handleGetUser = async (username: string) => {
        getUser(username).then((res) => setUser(res))
    }

    const handleGetRepos = async (username: string) => {
        getRepos(username).then((res) => setRepos(res))
    }

    const handleGetStarred = async (username: string) => {
        getStarred(username).then((res) => setStarred(res))
    }

    return (
        <UserContext.Provider
            value={{
                user,
                users,
                repos,
                starred,
                handleGetAll,
                handleGetUser,
                handleGetRepos,
                handleGetStarred
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };