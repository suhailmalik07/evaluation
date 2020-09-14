import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';



const data = { id: 0, posts: 3, followers: 1, engagement: 2, profile: "school" }

beforeEach(() => {
    render(<Item {...data} />)
})

afterEach(() => {
    cleanup()
})

test('Should render properly!', () => {
    const { getByTestId } = screen;
    const Item = getByTestId("item");
    expect(Item).toBeInTheDocument()
});

test('Should Have Name, followers, posts, engagement', () => {
    const { getByTestId } = screen;

    expect(getByTestId("name")).toHaveTextContent(data.profile)
    expect(getByTestId("followers")).toHaveTextContent(`Followers: ${data.followers}`)
    expect(getByTestId("posts")).toHaveTextContent(`Posts: ${data.posts}`)
    expect(getByTestId("engagement")).toHaveTextContent(`Engagement: ${data.engagement}`)
});