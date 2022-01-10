import { fromJS } from 'immutable';


const defaultStore = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }, {
        id: 2,
        title: "手绘",
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }],
    articleList: [{
        id: 1,
        title: "优秀的人不抱怨",
        desc: "在国家双减政策下，俞敏洪的公司干不下去了，俞敏洪把八万套课桌都捐给了山村小学，加上运费差不多一个亿。许多人都在夸俞敏洪是条汉子，慷慨大方，而我却...",
        imgUrl: "//upload-images.jianshu.io/upload_images/20013578-ba0dc1fdda59d46a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id: 2,
        title: "优秀的人不抱怨",
        desc: "在国家双减政策下，俞敏洪的公司干不下去了，俞敏洪把八万套课桌都捐给了山村小学，加上运费差不多一个亿。许多人都在夸俞敏洪是条汉子，慷慨大方，而我却...",
        imgUrl: "//upload-images.jianshu.io/upload_images/20013578-ba0dc1fdda59d46a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id: 3,
        title: "优秀的人不抱怨",
        desc: "在国家双减政策下，俞敏洪的公司干不下去了，俞敏洪把八万套课桌都捐给了山村小学，加上运费差不多一个亿。许多人都在夸俞敏洪是条汉子，慷慨大方，而我却...",
        imgUrl: "//upload-images.jianshu.io/upload_images/20013578-ba0dc1fdda59d46a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id: 4,
        title: "优秀的人不抱怨",
        desc: "在国家双减政策下，俞敏洪的公司干不下去了，俞敏洪把八万套课桌都捐给了山村小学，加上运费差不多一个亿。许多人都在夸俞敏洪是条汉子，慷慨大方，而我却...",
        imgUrl: "//upload-images.jianshu.io/upload_images/20013578-ba0dc1fdda59d46a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },]
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
