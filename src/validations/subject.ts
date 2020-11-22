import { ValidationSchema, registerSchema } from 'class-validator'

const name = [
	{
		type: 'minLength',
		constraints: [2],
		message: 'Your name must be between 2 and 20 characters'
	},
	{
		type: 'maxLength',
		constraints: [20],
		message: 'Your name must be between 3 and 20 characters'
	}
]

const intro = [
	{
		type: 'maxLength',
		constraints: [200],
		message: 'Your intro max 200 characters.'
	}
]

const createSubjectValidation: ValidationSchema = {
	name: 'createSubjectInput',
	properties: {
		name,
		intro
	}
}

const updateSubjectValidation: ValidationSchema = {
	name: 'updateSubjectInput',
	properties: {
		name,
		intro
	}
}

registerSchema(createSubjectValidation)
registerSchema(updateSubjectValidation)
