import { createFileRoute } from "@tanstack/react-router";
import DownloadPage from "@/components/arc/DownloadPage";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Скачать — ARCTURU" },
      { name: "description", content: "Скачать готовую сборку клиента для сервера Arcturu." },
      { property: "og:title", content: "Скачать — ARCTURU" },
      { property: "og:description", content: "Сборка клиента Arcturu." },
    ],
  }),
  component: DownloadPage,
});
