const global = {
  currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  if (global.currentPage === '/flixx/') {
    global.currentPage = '/flixx/index.html';
  }
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/flixx/':
    case '/flixx/index.html':
      console.log('Home');
      break;
    case '/flixx/shows.html':
      console.log('Shows');
      break;
    case '/flixx/movie-details.html':
      console.log('Movie Details');
      break;
    case '/flixx/tv-details.html':
      console.log('TV Details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }

  highlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);
