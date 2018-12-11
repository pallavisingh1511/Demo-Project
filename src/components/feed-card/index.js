import React, { Component, Fragment } from 'react'
import style from './style.less'

class FeedCard extends Component {
    render() {
        
		const {
			users,
			questions,
			feedposts
        } = this.props.feeds

        const { feed } = this.props
        const feedData = feed.element_type === 'questions' ? questions[feed.element_id] : feedposts[feed.element_id]

        return(
            <div className={style.feedContainer} key={ feed.element_id }>
                <div className={style.profileDetail}>
                    <div className={style.profile}>
                        <a href={users[feed.author_id].url}>
                            <div className={style.imageWrapper}>
                                <img className={style.profileImage} src={users[feed.author_id].avatar} />
                            </div>
                            <div className={style.profileDescription}>
                                <p className={style.name}>{ users[feed.author_id].name }</p>
                                <p className={style.status}>{ users[feed.author_id].str_lifestage }</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={style.feedWrapper}>
                    {
                        feed.element_type === 'questions' &&
                            <span className={style.feedType}>
                                <span className={style.typeQuestion}>Q: </span>
                            </span>
                    }
                    
                    <div className={style.detail}>
                        {
                            feed.element_type === 'questions' ?
                                feedData.question_post
                            :
                                feedData.ugc_post
                        }
                        <a href={feedData.web_detail_url}>...see more</a>
                    </div>
                </div>
                <hr className={style.divider} />
                <div className={style.actionWrapper}>
                    <span
                        className={feedData.is_liked ? style.liked : ''}
                        onClick={ () => this.props._likeClickHandler( feed.element_type, feedData.id ) }
                    >
                        {
                            feedData.is_liked ? 'Unlike' : 'Like'
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default FeedCard