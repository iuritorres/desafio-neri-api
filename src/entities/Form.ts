export class Form {
	public id?: string;
	public name!: string;
	public email!: string;
	public message!: string;
	public createdAt?: Date;

	public constructor({ id, name, email, message, createdAt }: Form) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
		this.createdAt = createdAt;
	}
}
