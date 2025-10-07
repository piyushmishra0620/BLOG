import {z} from 'zod';

export const loginSchema = z.object({
    email:z.email().nonempty("Email is required."),
    password:z.string().nonempty("Password is required.").min(8,{message:"Password should be a minimum of 8 characters long."})
});
