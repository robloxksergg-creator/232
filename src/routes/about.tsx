import { createFileRoute } from "@tanstack/react-router";
import ServerPage from "@/components/arc/ServerPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О сервере — ARCTURU" },
      { name: "description", content: "Arcturu — отдельная игровая вселенная: города игроков, фракции и живой мир." },
      { property: "og:title", content: "О сервере — ARCTURU" },
      { property: "og:description", content: "Города игроков, фракции, живой мир Arcturu." },
    ],
  }),
  component: ServerPage,
});
