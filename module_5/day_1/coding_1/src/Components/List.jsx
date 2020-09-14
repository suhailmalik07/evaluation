import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './Item';


const Container = styled.div`
    
`

const ListWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
`

const List = ({ data }) => {
    const [sort, setSort] = useState("")

    return (
        <Container >
            <div>
                <button data-testid="button1" onClick={() => setSort("followers")} >Highest no of Followers</button>
                <button data-testid="button2" onClick={() => setSort("posts")} >Highest no of Posts</button>
            </div>
            <ListWrapper data-testid="list">
                {
                    data
                        .sort((a, b) => b[sort] - a[sort])
                        .map(item => <Item key={item.id} {...item} />)
                }
            </ListWrapper>
        </Container>
    )
}

export default List;