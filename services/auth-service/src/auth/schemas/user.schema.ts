import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  'customer' = 'customer',
  'restaurant' = 'restaurant',
  'delivery' = 'delivery',
  'admin' = 'admin',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: UserRole, default: UserRole.customer })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
