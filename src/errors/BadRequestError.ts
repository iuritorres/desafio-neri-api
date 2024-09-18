import { ApiError } from "./ApiError.ts";

export class BadRequestError extends ApiError {
	constructor({ message }: { message: string }) {
		super({ message, statusCode: 400 });
	}
}
