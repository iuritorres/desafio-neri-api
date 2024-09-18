import { Request, Response } from "express";
import { z } from "zod";
import { BadRequestError } from "../errors/BadRequestError.ts";
import { FormService } from "../services/FormService.ts";

export class FormController {
	private readonly service: FormService;

	public constructor({ service }: { service: FormService }) {
		this.service = service;
	}

	public async submit(request: Request, response: Response): Promise<void> {
		const createFormSchema = z.object({
			name: z.string().catch(() => {
				throw new BadRequestError({ message: "Nome inválido." });
			}),
			email: z
				.string()
				.email()
				.catch(() => {
					throw new BadRequestError({ message: "Email inválido." });
				}),
			message: z.string().catch(() => {
				throw new BadRequestError({ message: "Mensagem inválida." });
			}),
		});

		const formDto = createFormSchema.parse(request.body);
		const result = await this.service.submit(formDto);

		response.status(201).json(result);
	}

	public static async initialize(dependencies: {
		service: FormService;
	}): Promise<FormController> {
		return new FormController(dependencies);
	}
}
