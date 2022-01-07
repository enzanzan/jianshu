import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing:border-box;
  padding-right:30px;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .iconfont{
    position:absolute;
    width:30px;
    line-height:30px;
    border-radius:15px;
    right:5px;
    bottom:5px;
    // background:red;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color:#666;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition:all .3s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .3s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`;
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;
export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border:1px solid rgba(236,97,73,.7);
  border-radius:19px;
  font-size:14px;
  &.reg{
    color:#EA6F5C;
  }
  &.writting{
    color:#fff;
    background:#EA6F5C;
  }
`;