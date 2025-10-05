import {useContext} from 'react';
import {blogContext} from '../Contexts/blogContext';

export const useBlog = ()=>useContext(blogContext);