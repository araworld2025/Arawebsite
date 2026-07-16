import bookImage from "@/assets/yoruba-book.png";

export type ProductStage = "interest" | "preorder" | "available" | "unavailable";

export type FeaturedProduct = {
  id: string;
  title: string;
  language: string;
  description: string;
  image: string;
  price: { amount: number; currency: "GBP" } | null;
  stage: ProductStage;
  checkoutUrl: string | null;
  reachTags: string[];
};

export const featuredProduct: FeaturedProduct = {
  id: "yoruba-500",
  title: "My First 500 Yoruba Words",
  language: "Yoruba",
  description:
    "A comprehensive introduction to essential Yoruba vocabulary through simple words, clear visuals, and everyday expressions for children aged 2–8.",
  image: bookImage,
  price: null,
  stage: "interest",
  checkoutUrl: null,
  reachTags: ["product:yoruba-500", "language:yoruba"],
};

const stageContent: Record<ProductStage, { cta: string; intent: "interest" | "preordered" | "restock"; note: string }> = {
  interest: {
    cta: "Join the preorder list",
    intent: "interest",
    note: "No payment is taken and joining does not reserve a copy. We will email you when paid preorder opens.",
  },
  preorder: {
    cta: "Preorder now",
    intent: "preordered",
    note: "Secure your copy through our checkout.",
  },
  available: {
    cta: "Buy the book",
    intent: "preordered",
    note: "Available to order now.",
  },
  unavailable: {
    cta: "Notify me when available",
    intent: "restock",
    note: "Join the notification list and we will tell you when it returns.",
  },
};

export const featuredProductStage = stageContent[featuredProduct.stage];

export const PRODUCT_CTA_EVENT = "ara:product-cta";

export function activateFeaturedProduct() {
  if ((featuredProduct.stage === "preorder" || featuredProduct.stage === "available") && featuredProduct.checkoutUrl) {
    window.location.assign(featuredProduct.checkoutUrl);
    return;
  }
  window.dispatchEvent(new CustomEvent(PRODUCT_CTA_EVENT));
}
