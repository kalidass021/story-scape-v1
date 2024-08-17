// function to handle custom errors
// when we don' have an error in the system but we wan't to add the error
export const errorHandler = (statusCode, message) => {
    const err = new Error();
    err.statusCode = statusCode;
    err.message = message;
    return err;
}