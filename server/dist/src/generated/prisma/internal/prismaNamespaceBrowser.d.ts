import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Profile: "Profile";
    readonly ProfileMovie: "ProfileMovie";
    readonly ProfileTrack: "ProfileTrack";
    readonly ProfileAlbum: "ProfileAlbum";
    readonly ProfileArtist: "ProfileArtist";
    readonly Follow: "Follow";
    readonly Like: "Like";
    readonly Saved_Think: "Saved_Think";
    readonly Block: "Block";
    readonly Report: "Report";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly username: "username";
    readonly email: "email";
    readonly profilePicUrl: "profilePicUrl";
    readonly isBot: "isBot";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly bio: "bio";
    readonly gender: "gender";
    readonly profession: "profession";
    readonly location: "location";
    readonly hobby: "hobby";
    readonly birthday: "birthday";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const ProfileMovieScalarFieldEnum: {
    readonly id: "id";
    readonly profile_id: "profile_id";
    readonly title: "title";
    readonly year: "year";
    readonly type: "type";
    readonly poster: "poster";
    readonly createdAt: "createdAt";
};
export type ProfileMovieScalarFieldEnum = (typeof ProfileMovieScalarFieldEnum)[keyof typeof ProfileMovieScalarFieldEnum];
export declare const ProfileTrackScalarFieldEnum: {
    readonly id: "id";
    readonly profile_id: "profile_id";
    readonly name: "name";
    readonly artist: "artist";
    readonly image: "image";
    readonly createdAt: "createdAt";
};
export type ProfileTrackScalarFieldEnum = (typeof ProfileTrackScalarFieldEnum)[keyof typeof ProfileTrackScalarFieldEnum];
export declare const ProfileAlbumScalarFieldEnum: {
    readonly id: "id";
    readonly profile_id: "profile_id";
    readonly name: "name";
    readonly image: "image";
    readonly createdAt: "createdAt";
};
export type ProfileAlbumScalarFieldEnum = (typeof ProfileAlbumScalarFieldEnum)[keyof typeof ProfileAlbumScalarFieldEnum];
export declare const ProfileArtistScalarFieldEnum: {
    readonly id: "id";
    readonly profile_id: "profile_id";
    readonly name: "name";
    readonly image: "image";
    readonly createdAt: "createdAt";
};
export type ProfileArtistScalarFieldEnum = (typeof ProfileArtistScalarFieldEnum)[keyof typeof ProfileArtistScalarFieldEnum];
export declare const FollowScalarFieldEnum: {
    readonly id: "id";
    readonly follower_id: "follower_id";
    readonly following_id: "following_id";
    readonly createdAt: "createdAt";
};
export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum];
export declare const LikeScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly interaction_id: "interaction_id";
};
export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];
export declare const Saved_ThinkScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly post_id: "post_id";
    readonly savedAt: "savedAt";
};
export type Saved_ThinkScalarFieldEnum = (typeof Saved_ThinkScalarFieldEnum)[keyof typeof Saved_ThinkScalarFieldEnum];
export declare const BlockScalarFieldEnum: {
    readonly id: "id";
    readonly blocked_id: "blocked_id";
    readonly blocker_id: "blocker_id";
    readonly created: "created";
};
export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum];
export declare const ReportScalarFieldEnum: {
    readonly id: "id";
    readonly reporter_id: "reporter_id";
    readonly reported_user_id: "reported_user_id";
    readonly reported_post_id: "reported_post_id";
    readonly reason: "reason";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map