import { FormDTO } from "../dtos/FormDTO.ts";
import { Form } from "../entities/Form.ts";
import { FormRepository } from "../repositories/FormRepository.ts";

export class FormService {
	private repository: FormRepository;

	public constructor({ repository }: { repository: FormRepository }) {
		this.repository = repository;
	}

	public async submit(body: FormDTO): Promise<FormDTO> {
		const form = new Form(body);

		const createdForm = await this.repository.create(form);
		if (!createdForm) {
			throw new Error("Failed to create form");
		}

		return {
			name: createdForm.name,
			email: createdForm.email,
			message: createdForm.message,
		};
	}
}
