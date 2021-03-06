import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render() {
        let { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img className='topic-pic' src={item.get('imgUrl')}></img>
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
}
export default connect(mapStateToProps, null)(Topic);