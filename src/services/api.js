import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjQ3NmQ1YTcxMDgyODZlNjhhZDUyZTBhMTdmODQ2YSIsInN1YiI6IjY0Yzc5ODViY2FkYjZiMDBhYzY2YmIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSg9HglHSRggVfwgKrsyoQE90FNb1YLdcYwjEjJGRxc',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
