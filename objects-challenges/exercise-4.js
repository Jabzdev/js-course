//                                         Blog Post Object


// title
// body
// author
// views
// comments
//   (author, body)
// isLive

let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 98,
  comments: [
    {author: 'a', body: 'b'},
    {author: 'c', body: 'd'}
  ],
  isLive: true
};

console.log(post);