import '../styles/style.css';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import { getPublishedBlogPost } from '../api/blogPosts';

const data = await  getPublishedBlogPost("the-tools-i-use-as-a-developer-in-2025");
const blocks = data.data.post.content.blocks;
console.log(blocks)


const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
        defaultLevel: 3
      }
    },
    list: {
      class: List,
      inlineToolbar: true
    }
  },
  data:{blocks}
});