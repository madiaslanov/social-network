import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";

let store = {
  _state: {
    profileState: {
      postsData: [
        {message: 'My first post', id: '1', count: 15},
        {message: 'Good bye!', id: '2', count: 20}
      ]
    },
    dialogState: {
      dialogData: [
        {name: 'Adi', id: 1},
        {name: 'Shoqan', id: 2},
        {name: 'Sultan', id: 3},
        {name: 'Bakdaulet', id: 4},
        {name: 'Ernur', id: 5}
      ],
      messageData: [
        {message: 'Hello my bro!', id: 1},
        {message: 'Whats up?', id: 2},
        {message: 'Im student of KBTU', id: 3}
      ],
      newMessageBody: [{message: '', id: Date.now()}]
    },
    newMessageValue: [{message: '', id: Date.now()}],
    sidebarState: {
      sidebarData: []
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },


  dispatch(action) {

    this._state.profileState = profileReduser(this._state.profileState, action);
    this._state.dialogState = dialogReduser(this._state.dialogState, action);
    this._state.sidebarState = sidebarReduser(this._state.sidebarState, action);

    this.rerenderEntireTree(this._state);

  }
}


export default store;
