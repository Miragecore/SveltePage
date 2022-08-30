import fs from 'fs';
// index.json.js
export function get() {
  // our markdown files lie in src/posts.
  let postTitles = fs.readdirSync(`src/posts`)
      .map(fileName => getTitleFrom(fileName));
  let body = JSON.stringify(postTitles);

  return { body }
}
