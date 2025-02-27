import * as z from "zod"
import { Currency } from "@prisma/client"
import { CompleteSubscription, RelatedSubscriptionModel } from "./index"

export const CurrencyModel = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCurrency extends Currency {
  Subscription: CompleteSubscription[]
}

/**
 * RelatedCurrencyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCurrencyModel = z.lazy(() => CurrencyModel.extend({
  Subscription: RelatedSubscriptionModel.array(),
})).schema
