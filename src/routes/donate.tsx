import { createFileRoute } from "@tanstack/react-router";
import DonatePage from "@/components/arc/DonatePage";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Донат — ARCTURU" },
      { name: "description", content: "Поддержите сервер Arcturu и получите привилегии." },
      { property: "og:title", content: "Донат — ARCTURU" },
      { property: "og:description", content: "Поддержите сервер Arcturu." },
    ],
  }),
  component: DonatePage,
});
