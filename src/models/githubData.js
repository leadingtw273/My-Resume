import axios from 'axios';

// prettier-ignore
const getProjectList = () =>
  axios({
    method: 'get',
    url: 'https://api.github.com/users/leadingtw273/repos'
  }).then(res => res.data.map(item => ({
    projectName: item.name,
    url: item.html_url,
    description: item.description,
    lastPush: item.pushed_at
  })));

const getAuth = () =>
  axios({
    method: 'get',
    url: 'https://api.github.com/users/leadingtw273/repos'
  });

export { getProjectList, getAuth };
