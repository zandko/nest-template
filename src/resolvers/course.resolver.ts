import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { ForbiddenError, UserInputError } from 'apollo-server-core'
import { PrismaService } from '@config'

import {
	Course,
	CourseConnection,
	CourseCreateInput,
	CourseOrderBy,
	CourseUpdateInput,
	CourseWhereInput,
	CourseWhereUniqueInput,
	PaginationInput, Subject, SubjectWhereUniqueInput
} from '../generator/graphql.schema'

@Resolver('Course')
export class CourseResolver {
	constructor(private readonly prisma: PrismaService) {
	}

	// @Query()
	// async course(@Args('where') where: CourseWhereUniqueInput) {
	// 	if (Object.keys(where).length > 1) {
	// 		throw new UserInputError('Your where must be 1 collection.')
	// 	}
	//
	// 	const course = await this.prisma.course.findOne({ where })
	//
	// 	if (!course) {
	// 		throw new ForbiddenError('Course not found.')
	// 	}
	//
	// 	return course
	// }
	//
	// @Mutation()
	// async createCourse(
	// 	@Args('data') data: CourseCreateInput
	// ) {
	// 	const { title } = data
	//
	// 	const course = await this.prisma.course.findOne({
	// 		where: { title }
	// 	})
	//
	// 	if (course) {
	// 		throw new ForbiddenError('Course already existed.')
	// 	}
	//
	// 	return await this.prisma.course.create(data)
	// }
	//
	// @Mutation()
	// async updateCourse(
	// 	@Args('where') where: CourseWhereUniqueInput,
	// 	@Args('data') data: CourseUpdateInput
	// ) {
	// 	return await this.prisma.course.update({
	// 		where,
	// 		data
	// 	})
	// }

	// @ResolveField('teacher')
	// async author(@Parent() course: Course) {
	// 	return this.prisma.course.findOne({ where: { id: course.id } }).teacher()
	// }
}
