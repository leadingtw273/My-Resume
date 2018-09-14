import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ResumeData: [
      {
        index: 0,
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
        index: 1,
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
        index: 2,
        title: 'EDUCATION',
        type: 'List',
        content: {
          Secondary: '高雄高工 (電子科)',
          University: '樹德科技大學 (電通系)'
        }
      },
      {
        index: 3,
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
        index: 4,
        title: 'ONLINE PROFILE',
        type: 'IconList',
        content: [
          {
            Name: 'FaceBook',
            Link: 'https://www.facebook.com/leadingtw'
          },
          {
            Name: 'GitHub',
            Link: 'https://github.com/leadingtw273'
          }
        ]
      },
      {
        index: 5,
        title: 'TIME LINE',
        type: 'TimeLine',
        content: [
          {
            tag: '2015',
            title: '開始自學程式',
            content: 'java, C++, OOP, android'
          },
          {
            tag: '2016',
            title: '電子電路相關',
            content: 'Arduino, raspberryPI, esp8266, Xbee'
          },
          {
            tag: '2017',
            title: '開始接觸網頁',
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
        index: 6,
        title: 'ABOUT ME',
        type: 'text',
        content:
          '您好~ 我是周昱宏 我只是在測試換行 所以你可以不用看這一段 因為這只是費文罷了 你如果看到最後 那只能說 恭喜你浪費時間看這一段了'
      }
    ]
  },
  mutations: {},
  actions: {}
});
