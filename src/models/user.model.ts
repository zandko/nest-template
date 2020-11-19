import { ObjectType, HideField } from '@nestjs/graphql'
import { BaseModel } from './base.model'

@ObjectType()
export class User extends BaseModel {
  mobile: string
  email?: string
  @HideField()
  password: string
  nickname?: string
  title?: string
  avatar?: string
  intro?: string
  isDelete?: Boolean
  deletedAt?: Date
}