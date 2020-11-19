import { Logger } from '@nestjs/common'

export function LoggerMiddleware(req, _res, next) {
	Logger.debug(
		`💬  ${
			req.headers['user-agent']
				? req.headers['user-agent'].split(') ')[0]
				: req.headers
		})`,
		'Bootstrap',
		false
	)
	next()
}
