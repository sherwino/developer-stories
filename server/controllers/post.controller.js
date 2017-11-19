import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
const request = require('request-promise');
/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}

export function getLanguagesInRepo(url) {
  const obj = {
    client_id: 'Iv1.5ae13d428668cb41',
    client_secret: '2bc7b798dcaea34cc65b51106e820c86927f9343',
  };
  const options = {
    method: 'GET',
    url: `${url}?client_id=${obj.client_id}&client_secret=${obj.client_secret}`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
      'cache-control': 'no-cache',
    },
  };

  return request(options);
}

export function fetchUserDataFromGithub(req, res) {
  const obj = {
    client_id: 'Iv1.5ae13d428668cb41',
    client_secret: '2bc7b798dcaea34cc65b51106e820c86927f9343',
  };
  const options = {
    method: 'GET',
    url: `https://api.github.com/users/${req.body.username}/repos?client_id=${obj.client_id}&client_secret=${obj.client_secret}`,
    qs: {
      type: 'all',
      sort: 'created',
      direction: 'asc',
    },
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
      'cache-control': 'no-cache',
      accept: 'application/vnd.github.v3+json',
    },
  };
  request(options)
    .then((body) => {
      const arrToReturn = [];
      const data = JSON.parse(body);
      data.forEach((repo) => {
        const { name, created_at, language } = repo;
        arrToReturn.push({ name, language, created_at });
      });
      res.json({ arrToReturn });
    });
}
