import axios from 'axios';

export const issues = await fetchRepositoryIssues();

export async function fetchRepositoryIssues() {
    try {
        const response = await axios.get(
            'https://api.github.com/repos/NilsonCarlosSaraf/LearningHub/issues'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching issues:', error);
        throw error;
    }
}