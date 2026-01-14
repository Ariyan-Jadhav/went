import { Request, Response, NextFunction, RequestHandler } from "express";
export declare class AppError extends Error {
    statusCode: number;
    status: "fail" | "error";
    isOperational: boolean;
    constructor(message: string, statusCode: number);
}
type AsyncHandler1 = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
export declare const catchAsync: (fn: AsyncHandler1) => RequestHandler;
export declare const errorHandler: (err: AppError, req: Request, res: Response, next: NextFunction) => void;
export declare const handleMongoError: (err: any) => AppError | undefined;
export declare const handleJWTError: () => AppError;
export declare const handleJWTExpiredError: () => AppError;
export {};
//# sourceMappingURL=error.middleware.d.ts.map