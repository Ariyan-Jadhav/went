import mongoose, { Document } from "mongoose";
export interface INotification extends Document {
    recipient_id: string;
    sender_id: string;
    type: string;
    message: string;
    reference_id?: string;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Notification: mongoose.Model<INotification, {}, {}, {}, mongoose.Document<unknown, {}, INotification, {}, mongoose.DefaultSchemaOptions> & INotification & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, INotification>;
//# sourceMappingURL=notification.model.d.ts.map