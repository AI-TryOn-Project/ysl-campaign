import type { Metadata } from "next";
import { ValentinePage } from "@/components/ValentinePage";

export const metadata: Metadata = {
  title: "Qixi Gift Concierge",
  description:
    "Saint Laurent Qixi gift edit with AI-style recommendations, style guides, wishlist, and shopping bag interactions.",
};

export default function Page() {
  return <ValentinePage />;
}
