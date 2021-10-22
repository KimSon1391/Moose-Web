import { movieType, tvType, movieCategory } from '../constant';

import axiosClient from './axiosClient';

const movieApi = {
  getMovies(type, params) {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },
  getTv(type, params) {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos(cate, id) {
    const url = movieCategory[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  getDetailPage(cate, id, params) {
    const url = movieCategory[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  searchKeyword(cate, params) {
    const url = 'search/' + movieCategory[cate];
    return axiosClient.get(url, params);
  },
  getDetail(cate, id, params) {
    const url = movieCategory[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  credit(cate, id) {
    const url = movieCategory[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  getSimilar(cate, id) {
    const url = movieCategory[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default movieApi;
