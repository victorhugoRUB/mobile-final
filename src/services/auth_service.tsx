import { LoginResponse } from "./data/entity/login_entity";
import { PostEntity } from "./data/entity/post_entity";

const BASE_URL = 'https://back-end-quhb.onrender.com';

async function login(email: string, password: string): Promise<LoginResponse> {
    console.log('Tentando fazer login com:', { email, password });
    console.log('URL do backend:', BASE_URL);
    console.log('Iniciando requisição de login...');
    console.log('body:', JSON.stringify({ email, password }));
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Resposta do login:', data);
    if (!response.ok) {
        throw new Error(data.message || 'Erro ao fazer login.');
    }
    return data;
}

async function getPosts(): Promise<PostEntity[]> {
    const response = await fetch(`${BASE_URL}/post`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Erro ao buscar posts.');
    }
    return data;
}

export default {
    login,
    getPosts,
};
