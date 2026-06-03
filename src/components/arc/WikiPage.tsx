const sidebar = [
  { title: "Навигация", items: ["Главная", "Новости", "Правила", "FAQ"] },
  { title: "Мир сервера", items: ["Фракции", "Города", "Биомы", "История"] },
  { title: "Системы", items: ["Ранги", "Приватные миры", "Экономика", "Плагины"] },
];
const cards = [
  { title: "Ранги", desc: "Полная система развития игроков и привилегий." },
  { title: "Лор мира", desc: "История мира Arcturu и его государств." },
  { title: "Фракции", desc: "Организации, союзы и игровые объединения." },
  { title: "Миры", desc: "Информация о приватных и общественных мирах." },
];
const rules = [
  { title: "Уважение к игрокам", text: "Любые оскорбления, травля или токсичное поведение запрещены.", type: "warn" },
  { title: "Читы запрещены", text: "Использование стороннего ПО приводит к моментальному бану.", type: "ban" },
  { title: "Гриферство", text: "Запрещено ломать или воровать постройки других игроков.", type: "ban" },
];

export default function WikiPage() {
  return (
    <div className="wiki-page">
      <div className="wiki-bg-layer">
        <div className="glow-ring glow-ring-large" />
        <div className="glow-ring glow-ring-small" />
      </div>

      <section className="wiki-hero-section">
        <div className="page-inner">
          <div className="wiki-badge">Official Wiki</div>
          <h1 className="wiki-hero-title">
            Энциклопедия мира <span>Arcturu</span>
          </h1>
          <p className="wiki-hero-copy">
            Полная база знаний по серверу — правила, системы, лор, города, фракции и игровые механики.
          </p>

          <div className="wiki-search-wrap">
            <input className="wiki-search-input" placeholder="Поиск по вики..." />
            <button className="wiki-search-button">Искать</button>
          </div>

          <div className="wiki-card-grid">
            {cards.map((card) => (
              <div key={card.title} className="wiki-card">
                <div className="wiki-card-icon">✦</div>
                <h3 className="wiki-card-title">{card.title}</h3>
                <p className="wiki-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="page-inner wiki-main-grid">
        <aside className="wiki-sidebar">
          {sidebar.map((group) => (
            <div key={group.title} className="wiki-menu-group">
              <div className="wiki-menu-title">{group.title}</div>
              <div className="wiki-menu-items">
                {group.items.map((item, index) => (
                  <div
                    key={item}
                    className={`wiki-menu-item ${index === 0 && group.title === "Навигация" ? "active" : ""}`}
                  >
                    <span className="wiki-menu-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <section className="wiki-main-content">
          <div className="wiki-main-card">
            <div className="wiki-main-image">ART</div>
            <div className="wiki-main-body">
              <div className="wiki-small-label">Вики / Правила</div>
              <h2 className="wiki-main-title">Основные правила сервера</h2>
              <p className="wiki-main-text">
                Незнание правил не освобождает игрока от ответственности.
                Администрация проекта оставляет за собой право принимать решения в спорных ситуациях.
              </p>

              <div className="wiki-callout">
                <div className="wiki-callout-icon">!</div>
                <div>
                  <div className="wiki-callout-title">Важно</div>
                  <div className="wiki-callout-desc">Используй /report или Discord если заметил нарушение.</div>
                </div>
              </div>

              <div className="wiki-rule-list">
                {rules.map((rule, i) => (
                  <div key={rule.title} className="wiki-rule-card">
                    <div className="wiki-rule-index">{i + 1}</div>
                    <div>
                      <div className="wiki-rule-header">
                        <h3 className="wiki-rule-title">{rule.title}</h3>
                        <span className={`wiki-rule-badge ${rule.type === "ban" ? "ban" : "warn"}`}>
                          {rule.type === "ban" ? "бан" : "предупреждение"}
                        </span>
                      </div>
                      <p className="wiki-rule-text">{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="wiki-side-panel">
          <div className="wiki-info-card">
            <div className="wiki-info-title">Информация</div>
            <div className="wiki-info-row"><div className="wiki-info-label">Версия</div><div>1.21.8+</div></div>
            <div className="wiki-info-row"><div className="wiki-info-label">Категория</div><div>Creative Server</div></div>
            <div className="wiki-info-row"><div className="wiki-info-label">Онлайн</div><div>500+ игроков</div></div>
          </div>

          <div className="wiki-info-card">
            <div className="wiki-info-title">Популярное</div>
            <div className="wiki-popular-list">
              {["Как получить ранг?", "Создание мира", "WorldEdit команды", "История сервера"].map((item) => (
                <div key={item} className="wiki-popular-item">{item}</div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
