import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

const prisma = new PrismaClient()

async function main() {
	dotenv.config()
	console.log('Seeding...')

	const user1 = await prisma.user.create({
		data: {
			mobile: '13310103082',
			email: 'push_over@163.com',
			password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
			nickname: 'Lisa',
			title: 'USER',
			avatar: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2038431386,2770542672&fm=26&gp=0.jpg',
			intro: '简介，即简明扼要的介绍。是当事人全面而简洁地介绍情况的一种书面表达方式，它是应用写作学研究的一种日常应用文体',
			isDelete: false,
		}
	})
	const user2 = await prisma.user.create({
		data: {
			mobile: '19525793599',
			email: '1336650475@qq.com',
			password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
			nickname: 'Bart',
			title: 'ADMIN',
			avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3531671336,3780835954&fm=26&gp=0.jpg',
			intro: '简介，即简明扼要的介绍。是当事人全面而简洁地介绍情况的一种书面表达方式，它是应用写作学研究的一种日常应用文体',
			isDelete: false,
		}
	})

	console.log({ user1, user2 })
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
