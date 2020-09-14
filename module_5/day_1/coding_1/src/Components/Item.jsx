import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin: 0.5rem 0;
    padding: 1rem;
    border: 1px solid #c4c4c4;
    border-radius: 5px;

    h2{
        text-align: left;
        margin-left: 2rem;
    }

    div{
        display: flex;

        p{
            margin: 0 1rem;
        }
    }
`

const Item = ({ id, profile, followers, posts, engagement }) => {
    return (
        <Container data-testid="item" >
            <h2 data-testid="name" >{profile}</h2>
            <div>
                <p data-testid="followers">Followers: {followers}</p>
                <p data-testid="posts">Posts: {posts}</p>
                <p data-testid="engagement">Engagement: {engagement}</p>
            </div>
        </Container>
    )
}

export default Item;