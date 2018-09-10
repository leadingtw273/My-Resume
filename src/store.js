import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ResumeData: [
      {
        index: 0,
        title: 'Personal',
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
        title: 'Contact',
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
        title: 'Education',
        type: 'List',
        content: {
          Secondary: '高雄高工 (電子科)',
          University: '樹德科技大學 \n (電腦與通訊系)'
        }
      },
      {
        index: 3,
        title: 'Technology',
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
        title: 'OnlineProfile',
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
        title: 'TimeLine',
        type: 'TimeLine',
        content: [
          {
            Year: '',
            Title: '',
            Content: ''
          }
        ]
      },
      {
        index: 6,
        title: 'AboutMe',
        type: 'text',
        content:
          '您好~ 我是周昱宏 我只是在測試換行 所以你可以不用看這一段 因為這只是費文罷了 你如果看到最後 那只能說 恭喜你浪費時間看這一段了'
      }
    ]
  },
  mutations: {},
  actions: {}
});
