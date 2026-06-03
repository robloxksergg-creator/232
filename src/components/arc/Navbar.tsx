import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const links = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О сервере" },
  { to: "/wiki", label: "Вики" },
  { to: "/donate", label: "Донат" },
] as const;

const downloadLinks = [
  {
    label: "Google Drive",
    href: "https://drive.google.com/file/d/1_LyLLYOZ9KGZQvvpxtxp9WkyhYnoNJz5/view",
  },
  {
    label: "MediaFire",
    href: "https://www.mediafire.com/file/2kikginpzxzkode/Arcturu_Season1_Version5.zip/file",
  },
] as const;

export default function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [downloadsOpen, setDownloadsOpen] = useState(false);
  const downloadsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!downloadsRef.current?.contains(event.target as Node)) {
        setDownloadsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="nav">
      <div className="page-inner nav-inner">
        <Link to="/" className="nav-logo">ARCTURU</Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nl ${pathname === l.to ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="download-menu" ref={downloadsRef}>
          <button
            type="button"
            className={`download-trigger ${pathname === "/download" ? "active" : ""}`}
            aria-expanded={downloadsOpen}
            aria-haspopup="menu"
            onClick={() => setDownloadsOpen((open) => !open)}
          >
            Скачать сборку
          </button>
          {downloadsOpen && (
            <div className="download-popover" role="menu">
              {downloadLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="download-option"
                  role="menuitem"
                  onClick={() => setDownloadsOpen(false)}
                >
                  <span>{link.label}</span>
                  <small>Arcturu Season 1 v5</small>
                </a>
              ))}
              <Link
                to="/download"
                className="download-option download-option-muted"
                role="menuitem"
                onClick={() => setDownloadsOpen(false)}
              >
                <span>Все способы</span>
                <small>Открыть страницу загрузки</small>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
