import { prisma } from "../../prisma/prismaClient.ts";
import { FormController } from "../controllers/FormController.ts";
import { FormRepository } from "../repositories/FormRepository.ts";
import { FormService } from "../services/FormService.ts";

export const formFactory = {
	async initialize(): Promise<FormController> {
		return FormController.initialize({
			service: new FormService({
				repository: new FormRepository({
					prismaClient: prisma,
				}),
			}),
		});
	},
};
