import { useState } from "react";
import cityRender2 from "@/assets/arc/render-city2.png";
import cityRender from "@/assets/arc/render-city.png";
import terraforming from "@/assets/arc/render-terraforming.png";

export default function ServerPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showcase = [
    { 
      title: "Города игроков", 
      text: "Огромные города, улицы, районы и собственные государства, созданные игроками.", 
      image: cityRender,
      gallery: [cityRender, cityRender, cityRender, cityRender]
    },
    { 
      title: "Терраформинг", 
      text: "Ландшафтный дизайн и изменение природы мира для создания уникальных пространств.", 
      image: terraforming,
      gallery: [terraforming, terraforming, terraforming, terraforming]
    },
    { 
      title: "Сообщество", 
      text: "Ивенты, совместные проекты, коллаборации и постоянное развитие мира.",
      gallery: [null, null, null, null]
    },
  ];
  const timeline = [
    { year: "2026", title: "Новая эра", text: "Полное обновление сервера и создание единой игровой вселенной." },
  ];

  return (
    <main className="server-page">
      <section className="server-hero">
        <div className="server-hero-copy">
          <div className="server-badge"><span />Выживание</div>
          <h1 className="server-title">
            Не просто сервер.
            <span>Отдельный мир.</span>
          </h1>
          <p className="server-lead">
            Arcturu — это огромная игровая вселенная, где игроки создают собственные города,
            фракции, истории и целые государства. Здесь мир развивается вместе с комьюнити.
          </p>
          <div className="server-actions">
            <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Discord</a>
          </div>
          <div className="server-stats">
            <div><strong>1200+</strong><span>Игроков</span></div>
            <div><strong>340+</strong><span>Построек</span></div>
            <div><strong>24/7</strong><span>Онлайн</span></div>
            <div><strong>5 нед.</strong><span>Истории</span></div>
          </div>
        </div>
        <div className="server-visual" aria-hidden="true">
          <div className="server-visual-card" style={{ backgroundImage: `url(${cityRender2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>
        </div>
      </section>

      <section className="server-section">
        <div className="sec-eyebrow">Мир игроков</div>
        <h2 className="sec-title">Истории создаются игроками</h2>
        <p className="sec-sub">На сервере нет одинаковых проектов: каждый город, фракция и постройка становятся частью общей истории мира.</p>
        <div className="server-showcase">
          {showcase.map((item) => (
            <article 
              className="server-card" 
              key={item.title}
              onClick={() => {
                setSelectedCard(item);
                setCurrentImageIndex(0);
              }}
              style={{ cursor: "pointer" }}
            >
              {item.image ? (
                <div className="server-card-art-img" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              ) : (
                <div className="server-card-art">ART</div>
              )}
              <div className="server-card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.gallery && <div style={{ marginTop: "8px", fontSize: "12px", color: "rgba(194,184,255,0.5)" }}>Нажми для галереи →</div>}
              </div>
            </article>
          ))}
        </div>

        {selectedCard && (
          <div className="gallery-modal" onClick={() => setSelectedCard(null)}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-close" onClick={() => setSelectedCard(null)}>✕</button>
              
              <div className="gallery-viewer">
                <div className="gallery-image">
                  {selectedCard.gallery[currentImageIndex] ? (
                    <img src={selectedCard.gallery[currentImageIndex]} alt={`${selectedCard.title} ${currentImageIndex + 1}`} />
                  ) : (
                    <div className="gallery-placeholder">ФОТО {currentImageIndex + 1}</div>
                  )}
                </div>
                
                <div className="gallery-controls">
                  <button 
                    className="gallery-btn gallery-prev"
                    onClick={() => setCurrentImageIndex((i) => (i - 1 + selectedCard.gallery.length) % selectedCard.gallery.length)}
                  >
                    ‹
                  </button>
                  <div className="gallery-counter">
                    {currentImageIndex + 1} / {selectedCard.gallery.length}
                  </div>
                  <button 
                    className="gallery-btn gallery-next"
                    onClick={() => setCurrentImageIndex((i) => (i + 1) % selectedCard.gallery.length)}
                  >
                    ›
                  </button>
                </div>
                
                <h3 className="gallery-title">{selectedCard.title}</h3>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="server-section">
        <div className="sec-eyebrow">История проекта</div>
        <h2 className="sec-title">Развитие мира</h2>
        <div className="server-timeline">
          {timeline.map((item) => (
            <article className="server-timeline-item" key={item.year}>
              <strong>{item.year}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="server-cta">
        <h2>Сюда заходят строить. Здесь остаются жить.</h2>
        <p>Arcturu — это место, где проекты становятся частью истории, а игроки создают собственный мир вместе.</p>
        <a className="btn-g" href="https://discord.gg/7Gf562zwy" target="_blank" rel="noreferrer">Присоединиться к серверу</a>
      </section>
    </main>
  );
}
