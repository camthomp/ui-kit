var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2019-12-02&' +
          'sortBy=popularity&' +
          'apiKey=7a7d259cb0f845db93e567bf7411d507';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response.articles)
    })