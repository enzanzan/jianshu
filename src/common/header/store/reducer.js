import * as constants from './constans';
import { fromJS } from 'immutable';

// immutable库
// 把js对象转换为immutable对象
const defaultStore = fromJS({
    focused: false,  // 搜索框获得焦点的标识
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}
    // immutabel对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象