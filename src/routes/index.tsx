import { createFileRoute } from "@tanstack/react-router";
import MainPage from "@/components/arc/MainPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARCTURU — Creative Multiplayer Universe" },
      { name: "description", content: "Arcturu — творческий Minecraft-сервер. Мир, созданный игроками: лор, города, фракции, ивенты." },
      { property: "og:title", content: "ARCTURU — Creative Multiplayer Universe" },
      { property: "og:description", content: "Творческий Minecraft-сервер. Мир, созданный игроками." },
    ],
  }),
  component: MainPage,
});
