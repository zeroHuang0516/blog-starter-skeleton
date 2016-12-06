import mongoose from 'mongoose';

import configFile from '../../config/config';

const config = configFile[process.env.NODE_ENV];

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`);

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'article', // rename the collection name
};

const articleSchema = mongoose.Schema({
  id: String,
  content: String,
  authorId: String,
  title: String,
  tags: { type: [String], default: [] },
}, options);

export const Article = mongoose.model('Article', articleSchema);
