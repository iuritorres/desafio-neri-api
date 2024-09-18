/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError.ts";

export function errorMiddleware(
	error: Error & Partial<ApiError>,
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const statusCode = error.statusCode ?? 500;
	const message = error.statusCode
		? error.message
		: "Erro interno do servidor.";

	return response.status(statusCode).json({ message });
}
