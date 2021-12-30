import axiosClient from "./axiosclient";

const movieAPI = {
  getList: (params) => {
    const url = "/list/7110985";
    return axiosClient.get(url, { params });
  },

  getTrendingDay: (params) => {
    const url = "/trending/all/day";
    return axiosClient.get(url, { params });
  },

  getTrendingWeek: (params) => {
    const url = "/trending/all/week";
    return axiosClient.get(url, { params });
  },

  getPopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },

  getGenres: (params) => {
    const url = "genre/movie/list";
    return axiosClient.get(url, { params });
  },
};

export default movieAPI;
