import mongoose, { Document } from "mongoose";
export interface IComment extends Document {
    user_id: string;
    interaction_id: string;
    content: string;
    likesCount: number;
    createdAt: Date;
}
export declare const Comment: mongoose.Model<IComment, {}, {}, {}, mongoose.Document<unknown, {}, IComment, {}, mongoose.DefaultSchemaOptions> & IComment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IComment>;
//# sourceMappingURL=comment.model.d.ts.map