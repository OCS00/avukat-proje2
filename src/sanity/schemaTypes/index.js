// src/sanity/schemaTypes/index.js

// Dosya adın 'post.js' ise './post' yazmalısın
import { postType } from './post' 

// Dosya adın 'category.js' ise './category' yazmalısın
import { categoryType } from './category'

export const schema = {
  types: [postType, categoryType],
}