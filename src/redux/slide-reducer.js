let initialState = {
    content: 1,
    slide: ''
}


export default function slideReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CONTENT_TO_ONE':
            return {...state, content: 1 }
        case 'CHANGE_CONTENT_TO_TWO':
            return {...state, content: 2 }
        case 'SLIDE_TWO':
            return {...state, slide: 'slide' }
        case 'SLIDE_ONE':
            return {...state, slide: '' }
        default:
            return {...state, content: 1 }
    }
}