import { Server } from "socket.io";
declare const io: Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
declare const userSockets: Map<any, any>;
export { io, userSockets };
import "./breathing_bots/general/schedule.js";
import "./breathing_bots/general/scheduleRandom.js";
import "./breathing_bots/news/news.js";
import "./breathing_bots/news/news2.0.js";
import "./breathing_bots/deleteSchedule.js";
//# sourceMappingURL=index.d.ts.map