import axios from "axios";
import crawlSample from "./crawlSample.json";
import { MovieData } from "./type";

const recommandURL = "/api/v1/models/movie-rec-bert-serving:predict";
const recommandHost = "movie-rec-bert-serving.default.example.com";

const movieApiURL = "/api/v1/models/movie-rec-bert-crawl:predict";
const movieApiHost = "movie-rec-bert-crawl.default.example.com";

export const recAPI = {
  getRecommandationData: async (movieIds: number[], topk: number) => {
    // const ret = await axios
    //   .post(
    //     recommandURL,
    //     {
    //       instances: movieIds,
    //       params: {
    //         topk: topk,
    //       },
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Kserve-Host": recommandHost,
    //       },
    //     }
    //   )
    //   .then((data: any) => {
    //     return data.data;
    //   })
    //   .catch((e) => {
    //     return { predictions: [] };
    //   });
    const ret = {
      predictions: [4259, 4036, 725, 2018, 63433, 113453, 128520, 128620, 95654, 4069],
    };
    return ret.predictions as number[];
  },
  getMovieInfo: async (movieId: number) => {
    // const ret = await axios
    //   .post(
    //     movieApiURL,
    //     {
    //       instances: [movieId],
    //       params: {
    //         do_predict: 1,
    //         periods: 100,
    //       },
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Kserve-Host": movieApiHost,
    //       },
    //     }
    //   )
    //   .then((data: any) => {
    //     return data.data;
    //   })
    //   .catch((e) => {
    //     return { predictions: [] };
    //   });
    const ret = crawlSample;
    return ret.predictions as MovieData[];
  },
};
