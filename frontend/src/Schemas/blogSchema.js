import {z} from 'zod';

export const blogSchema = z.object({
    name:z.string().min(3).max(20),
    heading:z.string().min(10),
    content:z.string()
});