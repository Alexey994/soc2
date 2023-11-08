
import profileReducer ,{addPostActionCreator} from "./profileReducer";


test('length of post should be incremented', ()=> {
    let action = addPostActionCreator("it-kamasutra");
    let state = {

        posts :[
            { id: 1, message: "Hi , how are you", likeCount:12 },
            { id: 2, message: "How is your it-kamasutra" , likeCount:20 },
            { id: 3, message: "Hello" , likeCount:12 },
            { id: 4, message: "How is your i" , likeCount:20 }
            ],
    };

    let newState = profileReducer(state , action);

    expect(newState.posts.length).toBe(5)
})