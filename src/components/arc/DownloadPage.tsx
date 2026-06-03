const downloadLinks = [
  {
    label: "Скачать с Google Drive",
    href: "https://drive.google.com/file/d/1_LyLLYOZ9KGZQvvpxtxp9WkyhYnoNJz5/view",
  },
  {
    label: "Скачать с MediaFire",
    href: "https://www.mediafire.com/file/2kikginpzxzkode/Arcturu_Season1_Version5.zip/file",
  },
] as const;

export default function DownloadPage() {
  return (
    <main className="server-page">
      <section className="server-hero">
        <div className="server-hero-copy">
          <div className="server-badge"><span />Сборка клиента</div>
          <h1 className="server-title">
            Скачать сборку
            <span>Arcturu</span>
          </h1>
          <p className="server-lead">
            Готовая сборка для игры на сервере. Выбери удобный источник.
          </p>
          <div className="download-page-actions">
            {downloadLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn-g">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
