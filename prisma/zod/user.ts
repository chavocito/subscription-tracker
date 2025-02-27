import * as z from "zod"
import { User } from "@prisma/client"
import { CompleteSubscription, RelatedSubscriptionModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends User {
  subscriptions: CompleteSubscription[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel = z.lazy(() => UserModel.extend({
  subscriptions: RelatedSubscriptionModel.array(),
})).schema
