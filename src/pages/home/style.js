import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:15px;
    margin-bottom:18px;
    padding-right:10px;
    font-size:14px;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        diplay:block;
        float:left;
        width:32px;
        height:31px;
        margin-right:10px; 
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem_1 = styled.div` 
    width:280px;
    height:50px;
    background:url("../../img/banner_1.png");
    background-size:contain;
`;
export const RecommendItem_2 = styled.div` 
    width:280px;
    height:50px;
    background:url("../../img/banner_2.png");
    background-size:contain;
`;
export const RecommendItem_3 = styled.div` 
    width:280px;
    height:50px;
    background:url("../../img/banner_3.png");
    background-size:contain;
`;
export const RecommendItem_4 = styled.div` 
    width:280px;
    height:50px;
    background:url("../../img/banner_4.png");
    background-size:contain;
`;
export const Download_App = styled.div` 
    margin-bottom:20px;
    padding: 10px 22px;
    width:200px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .pic{
        width: 60px;
        height: 60px;
        opacity: .85;
    }
`;

export const LoadMore = styled.div` 
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const BackTop = styled.div` 
    position:fixed;
    right:100px;
    bottom:100px;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    border:1px solid #ccc;
    background:#fff;
    font-size:14px;
    cursor:pointer;
`;
