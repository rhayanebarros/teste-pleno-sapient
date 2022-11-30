function api() {
  const ul2 = document.querySelector('.extract');
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein&origin=*';

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let page = data.query.pages[736].extract;
    ul2.innerHTML = `${page}`;
  })
  .catch(function(error) {
    console.log(error);
  });
}
export { api };