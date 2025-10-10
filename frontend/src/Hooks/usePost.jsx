import {useContext} from 'react';
import BlogContext from '../Contexts/blogContext';

export const useBlog = ()=>useContext(BlogContext);