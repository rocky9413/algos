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

/*
Hacker Rank MySQL Employees by department excercise
Write a query to print the respective Department Name and total of employees per department for all departments in Department table
Include departments with 0 employees.
Order the results per total of employees, if 2 or more departments have the same amount of employees then order alphabetically by department name
*/

// SELECT DEPARTMENT.NAME, COUNT(EMPLOYEE.ID) AS COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT
//     FROM DEPARMENT
//     LEFT JOIN EMPLOYEE ON DEPARTMENT.ID = EMPLOYEE.DEPT_ID
//     GROUP BY DEPARTMENT.NAME
//     ORDER BY COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT DESC, DEPARTMENT.NAME ASC
