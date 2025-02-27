import * as z from "zod"
import { Subscription, Frequency, Category, Status } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteCurrency, RelatedCurrencyModel } from "./index"

export const SubscriptionModel = z.object({
  id: z.string(),
  name: z.string().max(255, { message: "The title must be shorter than 256 characters" }),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().nullable(),
  price: z.number().int(),
  currencyId: z.string(),
  frequency: z.nativeEnum(Frequency),
  category: z.nativeEnum(Category),
  paymentMethod: z.string(),
  status: z.nativeEnum(Status),
  startDate: z.date(),
  renewalDate: z.date(),
})

export interface CompleteSubscription extends Subscription {
  User: CompleteUser | null
  Currency: CompleteCurrency
}

/**
 * RelatedSubscriptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubscriptionModel = z.lazy(() => SubscriptionModel.extend({
  User: RelatedUserModel.nullable(),
  Currency: RelatedCurrencyModel,
})).schema
