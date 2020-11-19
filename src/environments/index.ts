import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'Praise'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT || 14047
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3

// static
const STATIC: string = process.env.STATIC || 'static'

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

// cloudinary
const CLOUDINARY_NAME: string = process.env.CLOUDINARY_NAME || 'praise'
const CLOUDINARY_API_KEY: string =
	process.env.CLOUDINARY_API_KEY || '475584948229723'
const CLOUDINARY_API_SECRET: string =
	process.env.CLOUDINARY_API_SECRET || 'Duno2be58mE2lCFLcuOssGKG54c'

// pubsub
const NOTIFICATION_SUBSCRIPTION: string = 'newNotification'
const USER_SUBSCRIPTION: string = 'newUser'
const MESSAGES_SUBSCRIPTION: string = 'newMessages'

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
	process.env.GOOGLE_APPLICATION_CREDENTIALS || 'xxx'

// stripe
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || 'xxx'
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || 'xxx'
const STRIPE_PLAN: string = process.env.STRIPE_PLAN || 'xxx'

export {
	NODE_ENV,
	AUTHOR,
	PRIMARY_COLOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	RATE_LIMIT_MAX,
	GRAPHQL_DEPTH_LIMIT,
	STATIC,
	BCRYPT_SALT,
	CLOUDINARY_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
	USER_SUBSCRIPTION,
	NOTIFICATION_SUBSCRIPTION,
	MESSAGES_SUBSCRIPTION,
	GOOGLE_APPLICATION_CREDENTIALS,
	STRIPE_PUBLIC_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_PLAN
}
