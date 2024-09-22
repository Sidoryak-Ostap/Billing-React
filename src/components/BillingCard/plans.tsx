import { PlanType } from "./BillingCard";

export const plans: { [key: number]: PlanType } = {
  1: { pageviews: "10K", price: 8 },
  2: { pageviews: "50K", price: 12 },
  3: { pageviews: "100K", price: 16 },
  4: { pageviews: "500K", price: 24 },
  5: { pageviews: "1M", price: 36 },
};
