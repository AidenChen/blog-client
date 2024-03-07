import { marked } from 'marked';

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: false
});

export default marked;
