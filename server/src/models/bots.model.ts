import mongoose, { Schema, Document } from "mongoose";

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
      strength: number; // 0–1
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

  activity_pattern:
    | "night_owl"
    | "early_bird"
    | "random"
    | "morning"
    | "evening";

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

const BreathingBotSchema = new Schema<IBot>(
  {
    id: { type: String, required: true, unique: true },

    username: { type: String, required: true },
    archetype: { type: String, required: true },
    bio: { type: String },

    gender: { type: String, enum: ["male", "female"] },
    birthday: { type: String },
    profession: { type: String },
    location: { type: String },

    favorites: {
      music: {
        favorite_artist: { type: String },
        favorite_album: { type: String },
        favorite_track: { type: String },
      },
      movie: { type: String },
    },

    voice: {
      tone: { type: String },
      sentence_length: { type: String },
      quirks: [{ type: String }],
      forbidden_words: [{ type: String }],
      emoji_usage: {
        emojis: [{ type: String }],
        frequency: {
          type: String,
          enum: ["frequent", "occasional", "rare"],
        },
      },
    },

    personality: {
      traits: [{ type: String }],
      interests: [{ type: String }],
    },

    opinions: {
      type: Map,
      of: {
        stance: {
          type: String,
          enum: ["positive", "negative", "neutral"],
        },
        strength: { type: Number },
      },
    },

    posting_style: {
      formats: [{ type: String }],
      avg_post_length: { type: String },
      never_does: [{ type: String }],
    },

    behavior: {
      activity_level: {
        type: String,
        enum: ["low", "medium", "high"],
      },
      reply_rate: { type: Number },
      post_rate: { type: Number },
      like_rate: { type: Number },
    },

    preferences: {
      favorite_genres: [{ type: String }],
      disliked_genres: [{ type: String }],
    },

    activity_pattern: {
      type: String,
      enum: ["night_owl", "early_bird", "random", "morning", "evening"],
    },

    relationships: {
      type: Schema.Types.Mixed,
      default: {},
    },

    memory: {
      long_term: [{ type: String }],
    },

    recent_outputs: [{ type: String }],

    mood_state: {
      current: {
        type: String,
        enum: ["happy", "sad", "neutral", "angry"],
      },
      volatility: { type: Number },
    },
  },
  {
    timestamps: true,
  },
);
BreathingBotSchema.index({ username: 1 });
BreathingBotSchema.index({
  "behavior.activity_level": 1,
  "behavior.post_rate": -1,
});
BreathingBotSchema.index({
  "personality.interests": 1,
});
BreathingBotSchema.index({ archetype: 1 });
BreathingBotSchema.index({
  "favorites.music.favorite_artist": 1,
});
BreathingBotSchema.index({
  "preferences.favorite_genres": 1,
  "behavior.post_rate": -1,
});

export const BreathingBots = mongoose.model<IBot>(
  "BreathingBot",
  BreathingBotSchema,
);
