import { SchemaDirectiveVisitor } from 'graphql-tools'
import { ForbiddenError, AuthenticationError } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'

class PermissionDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field
		const { permission } = this.args

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

export default PermissionDirective
