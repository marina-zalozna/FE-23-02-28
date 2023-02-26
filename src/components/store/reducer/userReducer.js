
  const users = [
    { id: 1, title: "Svetlana", avatar: "https://via.placeholder.com/50", gender: "women" },
    { id: 2, title: "Vladimir", avatar: "https://via.placeholder.com/50", gender: "man" },
    { id: 3, title: "Alexandr", avatar: "https://via.placeholder.com/50", gender: "man" },
    { id: 4, title: "Tatyana", avatar: "https://via.placeholder.com/50", gender: "women" },
  ];

    
    export const userReducer = (state = users, action) => {
        if (action.type === 'ADD') {
            return [...state, action.payload]
        }else {
            return state
        }
    }