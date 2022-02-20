import https from 'https';
import axios from 'axios';
import fetch from 'node-fetch';

// Bored API

/**
 * Bored API
 * key [1000000, 9999999]
 * type ["education", "recreational", "social", "diy", "charity", "cooking", "music", "busywork"]
 */
const URL = 'https://www.boredapi.com/api/activity';

// using https to find Pikachu
const getDataUsingHttps = (url, options = {}) => {
  const urlQuery = URL.concat('?type=education');
  https
    .get(urlQuery, (res) => {
      res.setEncoding('utf8');
      res.on('data', (body) => {
        const resBody = JSON.parse(body);
        const { activity = '' } = resBody;
        console.log('Activity ===> ', activity);
        return activity;
      });
    })
    .on('error', (e) => console.error(e));
};
// getDataUsingHttps(URL);

// using axios.get to find Pikachu
const getDataUsingAxios = async (url, options = {}) => {
  const urlQuery = URL.concat('?type=education');
  try {
    const { data, status } = await axios.get(urlQuery, options);
    const { activity = '' } = data;
    console.log('Activity ===> ', activity);
    return activity;
  } catch (err) {
    console.log('err = ', err);
  }
};
// getDataUsingAxios(URL);

// using fetch to find Pikachu
const getDataUsingFetch = async (url, options = {}) => {
  const urlQuery = URL.concat('?type=education');
  try {
    const response = await fetch(urlQuery, options);
    const data = await response.json();
    const { activity = '' } = data;
    console.log('Activity ===> ', activity);
    return activity;
  } catch (err) {
    console.log('err = ', err);
  }
};
// getDataUsingFetch(URL);

// Get movie multiple page sample
function getMovieTitles(substr) {
  pageNum = 1;
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';
  let urlQuery = url.concat(substr);

  https
    .get(urlQuery, (res) => {
      res.setEncoding('utf8');
      res.on('data', (body) => {
        const dataRec = JSON.parse(body);
        const movies = dataRec.data;
        const totPages = dataRec.total_pages;

        const sortArray = [];

        movies.map((mv) => sortArray.push(mv.Title));

        if (totPages > 1) {
          for (let i = 2; i <= totPages; i++) {
            let newPage = i;
            const urlPage = url.concat(substr, '&page=', newPage);

            https.get(urlPage, (res) => {
              res.setEncoding('utf8');
              res.on('data', (body) => {
                const newData = JSON.parse(body);
                const newMovies = newData.data;
                for (let i = 0; i < newMovies.length; i++) {
                  sortArray.push(newMovies[i].Title);
                }
                let sorted = sortArray.sort();
                let final = sorted.join('\n');
                console.log(final);
              });
            });
          }
        } else {
          let sorted = sortArray.sort();
          console.log(sorted.join('\n'));
        }
      });
    })
    .on('error', (e) => console.error(e));
}
