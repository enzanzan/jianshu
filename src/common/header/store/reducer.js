import * as constants from './constans';
import { fromJS } from 'immutable';

// immutable库
// 把js对象转换为immutable对象
const defaultStore = fromJS({
    focused: false,  // 搜索框获得焦点的标识
});

export default (state = defaultStore, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}