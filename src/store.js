import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ResumeData: [
      {
        title: 'PERSONAL',
        type: 'List',
        content: {
          Name: '周昱宏',
          Birthday: '1997/04/21',
          Relationship: '單身',
          Nationality: '中華民國',
          Born: '台灣, 台南市',
          Languages: '中文',
          Sex: '男'
        }
      },
      {
        title: 'CONTACT',
        type: 'List',
        content: {
          Home: '無',
          Mobile: '0916414175',
          Address: '台灣高雄市鳳山區青年路二段111號2樓之10',
          Email: 'leadingtw@gmail.com',
          Line: 'leadingtw'
        }
      },
      {
        title: 'EDUCATION',
        type: 'List',
        content: {
          Secondary: '高雄高工 (電子科)',
          University: '樹德科技大學 (電通系)'
        }
      },
      {
        title: 'TECHNOLOGY',
        type: 'ProgressBarList',
        content: [
          {
            Name: 'JavaScript',
            Proficiency: 100
          },
          {
            Name: 'Vue',
            Proficiency: 90
          },
          {
            Name: 'Nodejs',
            Proficiency: 80
          },
          {
            Name: 'Express',
            Proficiency: 70
          },
          {
            Name: 'HTML',
            Proficiency: 65
          },
          {
            Name: 'CSS',
            Proficiency: 65
          }
        ]
      },
      {
        title: 'ONLINE PROFILE',
        type: 'IconList',
        content: [
          {
            Name: 'FaceBook',
            icon:
              'https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/fb-512.png',
            Link: 'www.facebook.com/leadingtw'
          },
          {
            Name: 'GitHub',
            icon:
              'https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/github-512.png',
            Link: 'www.github.com/leadingtw273'
          }
        ]
      },
      {
        title: 'LEARNING',
        type: 'TimeLine',
        content: [
          {
            tag: '2015',
            title: '程式自學',
            content: 'java, C++, OOP, android, Arduino'
          },
          {
            tag: '2016',
            title: '電子電路',
            content: 'raspberryPI, esp8266, Xbee,MySQL'
          },
          {
            tag: '2017',
            title: '網頁工程',
            content:
              'html, css, JavaScript, bootstrap, MVC, php, Apache, node.js, express, RestfulAPI, firebase, DesignPattern'
          },
          {
            tag: '2018',
            title: '持續進修',
            content: 'vue, vuex, vue-cli, scss, WebSocket, http協定, 爬蟲'
          }
        ]
      },
      {
        title: 'ABOUT ME',
        type: 'text',
        content:
          '我是個愛好資訊科技的新鮮人，平常會去接觸需多科技新聞或是新的技術，目前我正在專研的領域有網頁前後端設計、微服務應用、爬蟲、基本電子電路等等，想從事職業為網頁前後端工程師，目前持續累積自己網頁作品，包含這簡歷網站也是其中一種，我目前經驗還有所欠缺，我將會在大四努力持續精進自身能力。'
      }
    ]
  },
  mutations: {},
  actions: {}
});
