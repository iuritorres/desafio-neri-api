import { PrismaClient } from "@prisma/client";
import { Form } from "../entities/Form.ts";

export class FormRepository {
	private readonly prisma: PrismaClient;

	public constructor({ prismaClient }: { prismaClient: PrismaClient }) {
		this.prisma = prismaClient;
	}

	public async create(form: Form): Promise<Form> {
		return await this.prisma.form.create({
			data: form,
		});
	}
}
