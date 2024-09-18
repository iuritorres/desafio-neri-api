import { ApiError } from "./ApiError.ts";

export class NotFoundError extends ApiError {
	constructor({ message }: { message: string }) {
		super({ message, statusCode: 404 });
	}
}
