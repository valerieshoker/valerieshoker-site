import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';

export default {
  plugins: [
    tailwind(),
    postcssNesting(),
    autoprefixer()
  ]
};
