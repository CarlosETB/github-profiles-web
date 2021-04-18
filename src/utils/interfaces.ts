interface UsersProps {
    id?: number;
    login?: string;
    avatar_url?: string;
}

interface UserProps {
    id?: number;
    login?: string;
    avatar_url?: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
}

interface ReposProps {
    name?: string;
    description?: string;
    language?: string;
    license?: {
        name?: string;
    };
    pdated_at?: string;
    forks?: number;
    stargazers_count?: number;
}

interface StarredProps {
    owner?: {
        login?: string;
    };
    name?: string;
    description?: string;
    language?: string;
    license?: {
        name?: string;
    };
    pdated_at?: string;
    forks?: number;
    stargazers_count?: number;

}

export type { UserProps, UsersProps, ReposProps, StarredProps }