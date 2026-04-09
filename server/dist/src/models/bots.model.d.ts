import mongoose, { Document } from "mongoose";
export interface IBot extends Document {
    id: string;
    username: string;
    archetype: string;
    bio: string;
    gender: "male" | "female";
    birthday: string;
    profession: string;
    location: string;
    favorites: {
        music: {
            favorite_artist: string;
            favorite_album: string;
            favorite_track: string;
        };
        movie: string;
    };
    voice: {
        tone: string;
        sentence_length: string;
        quirks: string[];
        forbidden_words: string[];
        emoji_usage: {
            emojis: string[];
            frequency: "frequent" | "occasional" | "rare";
        };
    };
    personality: {
        traits: string[];
        interests: string[];
    };
    opinions: {
        [key: string]: {
            stance: "positive" | "negative" | "neutral";
            strength: number;
        };
    };
    posting_style: {
        formats: string[];
        avg_post_length: string;
        never_does: string[];
    };
    behavior: {
        activity_level: "low" | "medium" | "high";
        reply_rate: number;
        post_rate: number;
        like_rate: number;
    };
    preferences: {
        favorite_genres: string[];
        disliked_genres: string[];
    };
    activity_pattern: "night_owl" | "early_bird" | "random" | "morning" | "evening";
    relationships: Record<string, unknown>;
    memory: {
        long_term: string[];
    };
    recent_outputs: string[];
    mood_state: {
        current: "happy" | "sad" | "neutral" | "angry";
        volatility: number;
    };
}
export declare const BreathingBots: mongoose.Model<IBot, {}, {}, {}, mongoose.Document<unknown, {}, IBot, {}, mongoose.DefaultSchemaOptions> & IBot & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IBot>;
//# sourceMappingURL=bots.model.d.ts.map