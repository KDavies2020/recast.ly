var searchYouTube = ({query, max, key}, callback) => {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      maxResults: max,
      q: query,
      key: key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    }
  ).done(data => callback(data.items)).fail(() => console.log('GET request failed'));
};

export default searchYouTube;
