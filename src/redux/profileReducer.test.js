import profileReduser from "./profileReducer";
import {addPost, deletePost} from "./actions";

const initialState = {
    postsData: [{message: 'My first post', id: '1', count: 15},
        {message: 'Good bye!', id: '2', count: 20}]
};


it('Added posts', () => {
    let action = addPost("hello mother fuck!");

    let newState = profileReduser(initialState,action);

    expect(newState.postsData[2].message).toBe("hello mother fuck!");
});

it('Length of posts should be inc', () => {
    let action = addPost("hello mother fuck!");

    let newState = profileReduser(initialState,action);

    expect(newState.postsData.length).toBe(3);
});

it('Length of posts should decrement after delete', () => {
    let action = deletePost(1);
    let newState = profileReduser(initialState, action);

    expect(newState.postsData.length).toBe( 1);
});

