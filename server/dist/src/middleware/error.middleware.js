// import { Error as MongooseError } from "mongoose";
export class AppError extends Error {
    statusCode;
    status;
    isOperational;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
export const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV === "development") {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }
    else {
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            });
        }
        else {
            console.error("ERROR", err);
            res.status(500).json({
                status: "error",
                message: "some went wrong",
            });
        }
    }
};
export const handleMongoError = (err) => {
    if (err.name === "CastError") {
        return new AppError(`Invalid ${err.path}: ${err.value}`, 400);
    }
    if (err.code === 11000) {
        const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
        return new AppError(`Duplicate field value: ${value}, plz use another value!`, 400);
    }
    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((el) => el.message);
        return new AppError(`Invalid input data. ${errors.join(". ")}`, 400);
    }
    return err;
};
export const handleJWTError = () => new AppError(`Invalid token. Please log in again!`, 401);
export const handleJWTExpiredError = () => new AppError("Your token has expired! Please log in again.", 401);
//# sourceMappingURL=error.middleware.js.map