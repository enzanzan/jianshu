import styled from "styled-components";

export const LoginWrapper = styled.div`
    z-index:0;
    position:absolute;
    width:100%;
    top:56px;
    overflow:hidden;
    background:#eee;
`;

export const DetailWrapper = styled.div`
    overflow:hidden;
    width:720px;
    margin:10px auto;
    padding:0 40px 100px 40px;
    background:#fff;
    border-radius:3px;
`;

export const Header = styled.div`
    margin:50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`;

export const Content = styled.div`
    color:#2f2f2f;
    .img{
        width:560px;
        overflow:hidden;
        margin:0px auto;
    }
    img{
        width:100%;
    }
    p{
        margin:25px 0;
        font-size:16px;
        line-height:30px;
        color:#404040;
    }
`;

