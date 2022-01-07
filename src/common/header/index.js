import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from "./style";

// 改写成无状态组件
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left active"> 首页 </NavItem>
                <NavItem className="left"> 下载App </NavItem>
                <NavItem className="left"> IT技术 </NavItem>
                <NavItem className="right"> 登录 </NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? "focused iconfont" : "iconfont"}>&#xe62b;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe600;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);