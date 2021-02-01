import {
	Resolver,
	Query,
	Args,
	Mutation,
	ResolveField,
	Parent
} from '@nestjs/graphql'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { ForbiddenError, UserInputError } from 'apollo-server-core'
import { PrismaService } from '@config'

import {
	Course,
	Teacher,
	TeacherConnection,
	TeacherCreateInput,
	TeacherOrderBy,
	TeacherUpdateInput,
	TeacherWhereInput,
	TeacherWhereUniqueInput,
	PaginationInput
} from '../generator/graphql.schema'


@Resolver('Teacher')
export class TeacherResolver {
	constructor(private readonly prisma: PrismaService) {
	}

	@Mutation()
	async createTeacher(
		@Args('data') data: TeacherCreateInput
	): Promise<Teacher | any> {
		const { name } = data

		const teacher: Teacher | any = await this.prisma.teacher.findOne({
			where: { name }
		})

		if (teacher) {
			throw new ForbiddenError('Teacher already existed.')
		}

		return await this.prisma.teacher.create({
			data,
			include: {
				courses: true
			}
		})
	}

	@Mutation()
	async deleteTeacher(
	  @Args('where') where: TeacherWhereUniqueInput
	): Promise<Teacher | any> {
	  const { isDelete } = await this.prisma.teacher.findOne({ where })

	  return await this.prisma.teacher.update({
	    where,
	    data: {
	      isDelete: !isDelete,
	    },
	  })
	}

	// @Mutation()
	// async updateTeacher(
	//   @Args('where') where: TeacherWhereUniqueInput,
	//   @Args('data') data: TeacherUpdateInput
	// ): Promise<Teacher> {
	//   return await this.prisma.teacher.update({
	//     where,
	//     data
	//   })
	// }

	@Query()
	async teacher(
		@Args('where') where: TeacherWhereUniqueInput
	): Promise<Teacher | any> {
		if (Object.keys(where).length > 1) {
			throw new UserInputError('Your where must be 1 collection.')
		}
		const teacher: Teacher | any = await this.prisma.teacher.findOne({
			where,
			include: {
				courses: true
			}
		})
		if (!teacher) {
			throw new ForbiddenError('Teacher not found.')
		}

		return teacher
	}

	// @Query()
	// async teachersConnection(
	// 	@Args('where') where: TeacherWhereInput,
	// 	@Args() { after, before, first, last }: PaginationInput,
	// 	@Args('orderBy') orderBy: TeacherOrderBy
	// ): Promise<TeacherConnection> {
	// 	if (Object.keys(where).length > 1) {
	// 		throw new UserInputError('Your where must be 1 collection.')
	// 	}
	//
	// 	// const teachers = await findManyCursorConnection(
	// 	// 	(args) =>
	// 	// 		this.prisma.teacher.findMany({
	// 	// 			where,
	// 	// 			include: {
	// 	// 				courses: true
	// 	// 			},
	// 	// 			orderBy: orderBy ? {
	// 	// 				[orderBy.split('_')[0]]: orderBy.split('_')[1].toLowerCase()
	// 	// 			} : undefined,
	// 	// 			...args
	// 	// 		}),
	// 	// 	() =>
	// 	// 		this.prisma.subject.count({ where }),
	// 	// 	{ after, before, first, last }
	// 	// )
	// 	// return teachers
	// }

	// @ResolveField('courses')
	// async courses(@Parent() teacher: Teacher) {
	// 	return this.prisma.teacher.findOne({ where: { id: teacher.id } }).courses()
	// }
}
