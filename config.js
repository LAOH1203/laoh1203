var app = new Vue({
  el: '#page',
  data: {
    网页名称: '胡锦帆的个人简历',
    姓名: '胡锦帆',
    号码: '18396326015',
    邮箱: '1071356288@qq.com',
    个人网页: 'https://laoh1203.github.io/laoh1203/',
    地址: '福建',
    职业: '普通DD',
    头像地址: 'images/user.png',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com'
      },
      {
        类型: 'qq',
        地址: '234'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: '大家好',
    关于我内容: '我是普通DD',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '打白工',
        公司名称: '锦松五金',
        时间: '2008 - 现在',
        介绍: '给爸妈打白工'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '大学',
        学校名称: '福建工程学院',
        时间: '2018 - 现在',
        介绍: '里面的人说话好听，又好玩，我超喜欢在里面的'
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的能力: [
      {
        名称: '死宅唱歌',
        图标: 'icon-mic',
        介绍: '其实日文都不会'
      },
      {
        名称: '剪辑',
        图标: 'icon-video',
        介绍: '唱整点好活'
      },
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: '摸鱼',
        进度: 99,
      },
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      },
      {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      },
      {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }, {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }, {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }, {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }, {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }, {
        名称: '绅士狂喜',
        地址: 'www.baidu.com',
        图片: 'images/CT.gif',
        简介: '新作品'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})