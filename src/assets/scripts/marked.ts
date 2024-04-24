import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

const renderer = new marked.Renderer();

marked.setOptions({
  renderer: renderer,
  pedantic: false,
  gfm: true,
  breaks: false,
  highlight: function (code: any, lang: any) {
    if (!lang) {
      return hljs.highlightAuto(code).value;
    }
    return hljs.highlight(lang, code).value;
  }
});

export default marked;
