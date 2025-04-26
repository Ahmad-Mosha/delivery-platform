import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  profilePicture: string;

  @Prop({ required: true })
  userId: string;
}
