async function test() {
  const url = `https://jsonmock.hackerrank.com/api/articles?page=1`;
  const result = await fetch(url).then((res) => res.json());
  console.log(result);
}
