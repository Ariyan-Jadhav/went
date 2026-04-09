import mongoose, { Document } from "mongoose";
export interface Ithink extends Document {
    user_id: string;
    content: string;
    imageUrl?: Array<{
        url: string;
        publicId: string;
    }>;
    hashtags?: string[];
    likesCount: number;
    commentsCount: number;
    rethinkCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Think: mongoose.Model<Ithink, {}, {}, {}, mongoose.Document<unknown, {}, Ithink, {}, mongoose.DefaultSchemaOptions> & Ithink & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, Ithink>;
//# sourceMappingURL=think.model.d.ts.map