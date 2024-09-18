import { z } from "zod";
import { FormDTO } from "../dtos/FormDTO.ts";
import { Form } from "../entities/Form.ts";
import { BadRequestError } from "../errors/BadRequestError.ts";
import { FormRepository } from "../repositories/FormRepository.ts";

export class FormService {
	private repository: FormRepository;

	public constructor({ repository }: { repository: FormRepository }) {
		this.repository = repository;
	}

	public async submit(requestBody: FormDTO): Promise<FormDTO> {
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

		const form = new Form(createFormSchema.parse(requestBody));
		const createdForm = await this.repository.create(form);

		return {
			name: createdForm.name,
			email: createdForm.email,
			message: createdForm.message,
		};
	}
}
