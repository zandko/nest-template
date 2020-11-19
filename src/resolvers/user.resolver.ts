import {
	Resolver,
	Query,
	Args,
} from '@nestjs/graphql'

import { User } from '@models'
import { PrismaService } from '@config'


@Resolver('User')
export class UserResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query()
	async today(): Promise<Date> {
		return new Date()
	}

	@Query()
	async user(id): Promise<User> {
		try {
			return await this.prisma.user.findOne({where: {id}})
		} catch (error) {
			console.log(error)
		}
	}

	@Query()
	async users(
		@Args('offset') offset: number,
		@Args('limit') limit: number
	): Promise<User[]> {
		try {
			return await this.prisma.user.findMany({})
		} catch (error) {
			console.log(error)
		}
	}
}
