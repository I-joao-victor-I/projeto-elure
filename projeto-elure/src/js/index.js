fetch('./src/py/article.txt')
  .then(response => response.text())
  .then(articleContent => {
    const articleContainer = document.getElementById('article-container');
    articleContainer.textContent = articleContent;
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));