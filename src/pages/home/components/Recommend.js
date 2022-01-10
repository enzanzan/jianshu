import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl="./components/img/banner_1.png" />
                <RecommendItem imgUrl="./components/img/banner_2.png" />
                <RecommendItem imgUrl="./components/img/banner_3.png" />
                <RecommendItem imgUrl="./components/img/banner_4.png" />
            </RecommendWrapper>
        )
    }
}
export default Recommend;