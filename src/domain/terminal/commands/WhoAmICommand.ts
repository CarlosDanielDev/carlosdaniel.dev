import { CommandHandler } from '../CommandRepository';

export class WhoAmICommand implements CommandHandler {
	private readonly userInfo: string;

	constructor(userInfo: string) {
		this.userInfo = userInfo;
	}

	execute(): string {
		return this.userInfo;
	}
}
