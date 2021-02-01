import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { ForbiddenError, UserInputError } from 'apollo-server-core'
import { PrismaService } from '@config'

import {
	Subject,
	SubjectConnection,
	SubjectWhereUniqueInput,
	SubjectWhereInput,
	SubjectOrderBy,
	PaginationInput
} from '../generator/graphql.schema'

@Resolver('Subject')
export class SubjectResolver {
	constructor(private readonly prisma: PrismaService) {
	}

	@Query()
	async subjectsConnection(
		@Args('where') where: SubjectWhereInput,
		@Args() { after, before, first, last }: PaginationInput,
		@Args('orderBy') orderBy: SubjectOrderBy
	): Promise<SubjectConnection> {
		if (Object.keys(where).length > 1) {
			throw new UserInputError('Your where must be 1 collection.')
		}

		const subjects = await findManyCursorConnection(
			(args) =>
				this.prisma.subject.findMany({
					where,
					orderBy: orderBy ? {
						[orderBy.split('_')[0]]: orderBy.split('_')[1].toLowerCase()
					} : undefined,
					...args
				}),
			() =>
				this.prisma.subject.count({ where }),
			{ after, before, first, last }
		)
		return subjects
	}

	@Query()
	async subject(@Args('where') where: SubjectWhereUniqueInput): Promise<Subject> {
		if (Object.keys(where).length > 1) {
			throw new UserInputError('Your where must be 1 collection.')
		}

		const subject = await this.prisma.subject.findOne({ where })

		if (!subject) {
			throw new ForbiddenError('Subject not found.')
		}

		return subject
	}

	@Mutation()
	async createSubject(@Args('data') data: Subject): Promise<Subject> {
		const { name } = data
		const subject = await this.prisma.subject.findOne({
			where: { name }
		})

		if (subject) {
			throw new ForbiddenError('Subject already existed.')
		}

		return await this.prisma.subject.create({ data })
	}

	@Mutation()
	async updateSubject(
		@Args('where') where: SubjectWhereUniqueInput,
		@Args('data') data: Subject
	): Promise<Subject> {
		return await this.prisma.subject.update({
			where,
			data
		})
	}

	@Mutation()
	async upsertSubject(
		@Args('where') where: SubjectWhereUniqueInput,
		@Args('create') create: Subject,
		@Args('update') update: Subject
	): Promise<Subject> {
		return await this.prisma.subject.upsert({
			where,
			create,
			update
		})
	}
}
