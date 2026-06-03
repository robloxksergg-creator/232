import { createFileRoute } from "@tanstack/react-router";
import WikiPage from "@/components/arc/WikiPage";

export const Route = createFileRoute("/wiki")({
  head: () => ({
    meta: [
      { title: "Вики — ARCTURU" },
      { name: "description", content: "Энциклопедия мира Arcturu: правила, системы, лор, города и фракции." },
      { property: "og:title", content: "Вики — ARCTURU" },
      { property: "og:description", content: "Энциклопедия мира Arcturu." },
    ],
  }),
  component: WikiPage,
});
