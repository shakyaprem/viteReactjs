import { useAppGitHubUsersContext } from '../api/AppGitHubUsersContext';
import styled from 'styled-components';

const GitUsers = () => {
    const { loading } = useAppGitHubUsersContext();

    if (loading) {
        return (
            <>
                <h2>Loading GitHub....</h2>
            </>
        )
    }
  return (
    <GitResource>
        <h2>Loading GitHub....</h2>
    </GitResource>
  );
};

const GitResource = styled.section`
    width: 100vw;
    padding: 8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    margin-bottom: -36px;
`;

export default GitUsers;