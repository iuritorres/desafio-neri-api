import { Request, Response } from "express";
import { FormService } from "../services/FormService.ts";

export class FormController {
	private readonly service: FormService;

	public constructor({ service }: { service: FormService }) {
		this.service = service;
	}

	public async submit(request: Request, response: Response): Promise<void> {
		const { body } = request;
		const result = await this.service.submit(body);

		response.status(200).json(result);
	}

	public static async initialize(dependencies: {
		service: FormService;
	}): Promise<FormController> {
		return new FormController(dependencies);
	}
}
