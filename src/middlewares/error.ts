/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError.ts";

export function errorMiddleware(
	error: Error & Partial<ApiError>,
	_request: Request,
	response: Response,
	_next: NextFunction,
) {
	const statusCode = error.statusCode ?? 500;
	const message = error.statusCode
		? error.message
		: "Erro interno do servidor.";

	return response.status(statusCode).json({ message });
}
