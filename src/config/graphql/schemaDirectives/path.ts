import { SchemaDirectiveVisitor } from 'graphql-tools'
import { ForbiddenError, AuthenticationError } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'

class PathDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field
		const { path } = this.args

		field.resolve = async function (...args) {
			const { currentUser } = args[2]

			if (!currentUser) {
				throw new AuthenticationError(
					'Authentication token is invalid, please try again.'
				)
			}

			return resolve.apply(this, args)
		}
	}
}

export default PathDirective
