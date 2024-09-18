import { Request, Response } from "express";
import { FormService } from "../services/FormService.ts";

export class FormController {
	private readonly service: FormService;

	public constructor({ service }: { service: FormService }) {
		this.service = service;
	}

	public async submit(request: Request, response: Response): Promise<void> {
		const result = await this.service.submit(request.body);
		response.status(201).json(result);
	}

	public static async initialize(dependencies: {
		service: FormService;
	}): Promise<FormController> {
		return new FormController(dependencies);
	}
}
