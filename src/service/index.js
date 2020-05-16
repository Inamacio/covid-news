import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-227-206-137.compute-1.amazonaws.com/v1/',
})

export default async function search(q = 'covid-19') {
  try {
    const { request } = await api.get(`search/${q}`);

    return JSON.parse(request.response);
  } catch (e) {
    return {
      success: false,
      mainNews: {},
      featureMainNews: [],
      news: [],

    }
  }
}
