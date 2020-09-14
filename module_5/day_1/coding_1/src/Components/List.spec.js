import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';


const data = [
    { id: 0, posts: 3, followers: 1, engagement: 2, profile: "school" },
    { id: 1, posts: 1, followers: 4, engagement: 2, profile: "masai" },
    { id: 2, posts: 2, followers: 3, engagement: 2, profile: "suhailmalik" }
]

beforeEach(() => {
    render(<List data={data} />)
})

afterEach(() => {
    cleanup()
})

test('Should render properly!', () => {
    const { getByTestId } = screen;
    const List = getByTestId("list");
    expect(List.childElementCount).toBe(3);
});

test("Should render buttons for sorting", () => {
    const { getByTestId } = screen;
    const heighestFollowersBtn = getByTestId("button1")
    const heighestPostsBtn = getByTestId("button2")

    expect(heighestFollowersBtn.textContent).toBe("Highest no of Followers")
    expect(heighestFollowersBtn.tagName).toBe("BUTTON")
    expect(heighestPostsBtn.tagName).toBe("BUTTON")
    expect(heighestPostsBtn.textContent).toBe("Highest no of Posts")
})

test("Should sort with heighest posts show on the dom!", () => {
    const sortedData = [...data].sort((a, b) => b["posts"] - a["posts"])
    const { getByTestId } = screen;
    const heighestPostsBtn = getByTestId("button2")
    fireEvent.click(heighestPostsBtn)

    const List = getByTestId("list")

    List.childNodes.forEach((item, i) => {
        expect(item).toHaveTextContent(sortedData[i].profile)
    })
})

test("Should sort with heighest followers show on the dom!", () => {
    const sortedData = [...data].sort((a, b) => b["followers"] - a["followers"])
    const { getByTestId } = screen;
    const heighestFollowersBtn = getByTestId("button1")

    fireEvent.click(heighestFollowersBtn)

    const List = getByTestId("list")

    List.childNodes.forEach((item, i) => {
        expect(item).toHaveTextContent(sortedData[i].profile)
    })
})

