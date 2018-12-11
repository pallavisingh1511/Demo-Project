import * as types from './ActionTypes'

const initialState = {
    feeds: [],
    isFetching: false,
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_FEEDS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.RESPONSE_FEEDS:
            let feeds = action.payload.data
            Object.keys(feeds.questions).forEach((key) => {
                action.payload.data.questions[key]['is_liked'] = false
            })
            Object.keys(feeds.feedposts).forEach((key) => {
                action.payload.data.feedposts[key]['is_liked'] = false
            })

            return Object.assign({}, state, {
                isFetching: false,
                feeds: action.payload.data,
            })
        case types.FAILURE_FEEDS:
            return Object.assign({}, state, {
                isFetching: false,
                feeds: {}
            })
        
        case types.TOGGLE_LIKE:
            const isLiked = !state.feeds[action.payload.feed_type][action.payload.id]['is_liked']
            return Object.assign({}, state, { 
                feeds: Object.assign({}, state.feeds, {
                    [action.payload.feed_type]: Object.assign({}, state.feeds[action.payload.feed_type], {
                        [action.payload.id]: Object.assign({}, state.feeds[action.payload.feed_type][action.payload.id], {
                            is_liked: isLiked
                        }),
                    }),
                })
            })
        default:
            return state
    }
}