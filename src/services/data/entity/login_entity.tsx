export interface LoginResponse {
    access_token: string;
    user: {
        name: string;
    };
}