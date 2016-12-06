import mongoose from 'mongoose';

import configFile from '../../config/config';

const config = configFile[process.env.NODE_ENV];

mongoose.connect(`mongodb://${config.host}/${config.database}`);

const articleSchema = mongoose.Schema({
  id: String,
  content: String,
  author: String,
  title: String,
  tags: String,
  crawled_at: Date,
  updated_at: Date,
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
