import {Schema, model} from 'mongoose';

export interface UserModel {
  firstName: string;
  lastName:string;
  email: string;
  password: string;
  id: number;
  isAdmin:boolean
}

const UserSchema = new Schema<UserModel>(
    {
  firstName: {type:String,required:true},
  lastName:{type:String,required:true},
  email: {type:String,required:true},
  password: {type:String,required:true},
  id: {type:Number,required:false},
  isAdmin:{type:Boolean,required:false}
},
{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
}
);

const User = model('User', UserSchema);
export default User;