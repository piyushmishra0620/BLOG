import {z} from 'zod';

export const signupSchema = z.object({
    name:z.string().nonempty("Username is required.").min(3,{message:"Username should be atleast 3 characters long."}).max(20,{message:"Username should not exceed 20 characters."}),
    email:z.nonempty("Email is required.").email(),
    password:z.string().nonempty("Password is required.").min(8,{message:"Password should be of minimum 8 characters long."})
});
