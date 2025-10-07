import {z} from 'zod';

export const blogSchema = z.object({
    name:z.string().nonempty("Name required.").min(3,{message:"Name must be atleast 3 characters long."}).max(20,{message:"Name must not exceed the character length of 20."}),
    heading:z.string().nonempty("Heading required.").min(10,{message:"Heading must be atleast 10 characters long."}),
    content:z.string().nonempty("Content required.")
});