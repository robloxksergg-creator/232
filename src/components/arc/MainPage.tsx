import { useState } from "react";
import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/arc/hero-bg.png";
import teamSeduvsky from "@/assets/arc/team-seduvsky.png";
import teamConnector from "@/assets/arc/team-connector.png";

const teamSlides = [
  { id: "seduvsky", image: teamSeduvsky, alt: "SEDUVSKY - Владелец сервера", title: "SEDUVSKY", role: "Владелец • Технический администратор" },
  { id: "connector", image: teamConnector, alt: "CONNECTOR - Модератор", title: "CONNECTOR", role: "Модератор • Поддержка сообщества" },
];

export default function MainPage() {
  const [activeTeamSlide, setActiveTeamSlide] = useState(0);
  const currentTeamSlide = teamSlides[activeTeamSlide];

  const prev = () => setActiveTeamSlide((i) => (i - 1 + teamSlides.length) % teamSlides.length);
  const next = () => setActiveTeamSlide((i) => (i + 1) % teamSlides.length);

  return (
    <div className="site">
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="side-left">SEASON II<span>ERA OF CREATION</span></div>
        <div className="side-right">ONLINE · 127</div>

        <div className="hero-content">
          <div className="hero-chip"><span className="hero-dot" />Creative Multiplayer Universe</div>
          <h1 className="hero-title">ARCTURU</h1>
          <p className="hero-sub">Мир, созданный игроками</p>

          <div className="hero-btns">
            <Link className="btn-g" to="/wiki">Лор</Link>
            <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Discord</a>
            <Link className="btn-g" to="/about">О сервере</Link>
          </div>
        </div>
      </section>

      <div className="page-inner">
        <section className="stats-bar">
          <div className="stat"><div className="stat-num">2 СЕЗОН</div><div className="stat-label">Текущий сезон</div></div>
          <div className="stat"><div className="stat-num">20</div><div className="stat-label">ONLINE</div></div>
          <div className="stat"><div className="stat-num">500+</div><div className="stat-label">DISCORD</div></div>
          <div className="stat"><div className="stat-num">ЖИВОЙ МИР</div><div className="stat-label">Проект</div></div>
        </section>

        <section className="section" id="about">
          <div className="sec-eyebrow">Возможности</div>
          <h2 className="sec-title">Все что нужно строителю</h2>
          <p className="sec-sub">Инструменты и система, созданная специально под творческую игру.</p>
          <div className="feat-grid">
            {[
              { icon: "📜", name: "Лор", desc: "Полная история мира, персонажей и событий Arcturu.", cls: "fi-purple" },
              { icon: "🌍", name: "Мир", desc: "Уникальные биомы, зоны и публичные пространства.", cls: "fi-teal" },
              { icon: "🏙️", name: "Города", desc: "Крупные игровые города и их ключевые постройки.", cls: "fi-coral" },
              { icon: "⚔️", name: "Фракции", desc: "Организации игроков, их правила и достижения.", cls: "fi-amber" },
              { icon: "📚", name: "История", desc: "Краткие летописи и важные вехи проекта.", cls: "fi-blue" },
              { icon: "🛠️", name: "Системы", desc: "Ключевые игровые механики и правила взаимодействия.", cls: "fi-pink" },
            ].map((f) => (
              <div className="feat" key={f.name}>
                <div className="feat-top">
                  <div className={`feat-icon ${f.cls}`}><span>{f.icon}</span></div>
                  <div className="feat-name">{f.name}</div>
                </div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="news-section" id="news">
          <div className="s-head">
            <div>
              <div className="sec-eyebrow">Новости</div>
              <h2 className="sec-title" style={{ marginBottom: 0 }}>Последние события</h2>
            </div>
            <a className="s-link" href="/about">Все новости →</a>
          </div>
          <div className="news-big">
            <div className="ncard vertical">
              <div className="ncard-img top"><span>🖼️</span></div>
              <div className="ncard-body">
                <span className="ntag t-gen">General</span>
                <div className="ntitle">Вступай в команду Arcturu</div>
                <div className="ndate">25 мая 2026</div>
                <div className="ntext">Хочешь помогать игрокам и развивать сервер? Набор модераторов открыт: обновили правила и упростили описание ролей.</div>
                <a className="nmore" href="#">Читать далее →</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="ncard">
                <div className="ncard-img horiz"><span>🖼️</span></div>
                <div className="ncard-body">
                  <span className="ntag t-con">Конкурс</span>
                  <div className="ntitle">BuildBattle — необычный конкурс</div>
                  <div className="ndate">29 апр. 2026</div>
                  <div className="ntext">Призовой фонд 3000 руб.</div>
                  <a className="nmore" href="#">Читать →</a>
                </div>
              </div>
              <div className="ncard">
                <div className="ncard-img horiz"><span>🖼️</span></div>
                <div className="ncard-body">
                  <span className="ntag t-ev">Ивент</span>
                  <div className="ntitle">Мастер-класс: Ландшафт</div>
                  <div className="ndate">19 апр. 2026</div>
                  <div className="ntext">25 апреля в 16:00 МСК.</div>
                  <a className="nmore" href="#">Читать →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="team-wrap">
            <div className="team-carousel" aria-label="Участники команды">
              <button className="team-arrow team-arrow-prev" type="button" onClick={prev} aria-label="Предыдущая карточка">‹</button>
              <div className="tcv-card">
                <div className="tcv-image-viewport">
                  <img className="tcv-poster" src={currentTeamSlide.image} alt={currentTeamSlide.alt} style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }} />
                </div>
                {currentTeamSlide.title && (
                  <div className="tcv-card-body">
                    <div className="tcv-title">{currentTeamSlide.title}</div>
                    {currentTeamSlide.role && <div className="tcv-role">{currentTeamSlide.role}</div>}
                  </div>
                )}
              </div>
              <button className="team-arrow team-arrow-next" type="button" onClick={next} aria-label="Следующая карточка">›</button>
              <div className="team-pages" aria-label="Страницы карточек">
                {teamSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`team-page-dot ${index === activeTeamSlide ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTeamSlide(index)}
                    aria-label={`Открыть карточку ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
