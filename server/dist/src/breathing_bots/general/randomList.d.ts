import "dotenv/config";
declare function morning(): Promise<string[]>;
declare function evening(): Promise<string[]>;
declare function night(): Promise<string[]>;
declare function random(): Promise<string[]>;
declare const _default: {
    morning: typeof morning;
    evening: typeof evening;
    night: typeof night;
    random: typeof random;
};
export default _default;
//# sourceMappingURL=randomList.d.ts.map