import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import style from "./style.less";
import * as ActionCreators from './ActionCreators'
import FeedCard from '../components/feed-card'
class App extends Component {

    constructor(props) {
        super(props)

        this._likeClickHandler = this._likeClickHandler.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(ActionCreators.getData())
    }

    _renderCards() {
		const {
			feeds
		} = this.props
		
        return feeds.feed_data.map((feed) => {
			return(
                <FeedCard
                    key={ feed.element_id }
                    feed={ feed }
                    feeds={ feeds }
                    _likeClickHandler={ this._likeClickHandler }
                />
			)
		})
    }

    _likeClickHandler( feed_type, id ) {
        this.props.dispatch(ActionCreators.toggleLike({
            feed_type,
            id
        }))
    }

    render() {
        return(
            <div className={ style.container }>
                {
                    Object.keys(this.props.feeds).length > 0 && this._renderCards()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        feeds: state.dataReducer.feeds,
        isFetching: state.dataReducer.isFetching,
    }
}

export default connect( mapStateToProps )( App )