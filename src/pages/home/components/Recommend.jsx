import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem_1, RecommendItem_2, RecommendItem_3, RecommendItem_4 } from '../style';


class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem_1 />
                <RecommendItem_2 />
                <RecommendItem_3 />
                <RecommendItem_4 />
            </RecommendWrapper>
        )
    }
}
export default Recommend;