import {z} from 'zod';

export const loginSchema = z.object({
    email:z.string().nonempty("Email is required.").email(),
    password:z.string().nonempty("Password is required.").min(8,{message:"Password should be a minimum of 8 characters long."})
});
