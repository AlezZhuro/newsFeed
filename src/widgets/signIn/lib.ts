import {object, string, number, date, InferType} from 'yup';

const loginSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

const parseErrorMsg = (msg: string): {email: string; password: string} => {
  return {
    email: msg.includes('email') ? msg : '',
    password: msg.includes('password') ? msg : '',
  };
};

export {loginSchema, parseErrorMsg};
