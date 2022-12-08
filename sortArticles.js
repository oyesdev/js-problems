async function test(limit) {
  const url = `https://jsonmock.hackerrank.com/api/articles?page=`;
  let page = 1;
  let articles = [];
  while (1) {
    const result = await fetch(url + page).then((res) => res.json());
    const { total_pages } = result;
    articles = articles.concat(result.data);
    if (page >= total_pages) {
      break;
    }
    page++;
  }
  articles = articles.filter(
    (article) => !(article.title === null && article.story_title === null)
  );

  articles.forEach((article) => {
    if (article.title === null) article.title = article.story_title;
  });

  articles.sort((a, b) => {
    if (a.num_comments !== b.num_comments)
      return b.num_comments - a.num_comments;
    else {
      return b.title.charCodeAt(0) - a.title.charCodeAt(0);
    }
  });
  console.log(articles.filter((article) => article.num_comments === 730));

  console.log(articles.splice(0, limit));
}

test(4);
