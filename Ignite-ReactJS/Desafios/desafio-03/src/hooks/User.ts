import axios from 'axios';


export const user = await getUser("NilsonCarlosSaraf");

export async function getUser(username: string) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}