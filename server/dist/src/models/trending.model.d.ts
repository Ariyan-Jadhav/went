import mongoose, { Document } from "mongoose";
export interface INews extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const News: mongoose.Model<INews, {}, {}, {}, mongoose.Document<unknown, {}, INews, {}, mongoose.DefaultSchemaOptions> & INews & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, INews>;
//# sourceMappingURL=trending.model.d.ts.map