export interface UserLogin{
  email:string,
  password:string
}
export interface UserRegistro{
  name:string,
  email:string,
  password:string
}
export interface UserRegistroResponse{
  error?:boolean;
  message?:string;
}
export interface UserLoginResponse{
  error?:boolean;
  message?:string;
  token?:string
}
