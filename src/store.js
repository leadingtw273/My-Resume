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
          SecondarySchool: {
            Name: '高雄高級工業職業學校',
            department: '電子科',
            date: '2012/09~2015/06(畢業)'
          },
          University: {
            Name: '樹德科技大學',
            department: '電腦與通訊系',
            date: '2015/09~2019/06(在學)'
          }
        }
      },
      {
        index: 3,
        title: 'Technology',
        type: 'ProgressBarList',
        content: [
          {
            Name: 'JavaScript (es5,es6,es7)',
            Proficiency: 60
          },
          {
            Name: 'Vue (Vuex, VueRouter, Vue-cli)',
            Proficiency: 80
          },
          {
            Name: 'Nodejs',
            Proficiency: 60
          },
          {
            Name: 'Express',
            Proficiency: 70
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
        content: ''
      }
    ]
  },
  mutations: {},
  actions: {}
});
