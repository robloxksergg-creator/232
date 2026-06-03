import { useMemo, useState } from "react";

const perks = [
  { id: "resident", name: "Житель", desc: "Базовые привилегии и цвет ника.", price: 199 },
  { id: "citizen", name: "Гражданин", desc: "Дополнительные команды, слоты и значок.", price: 399 },
  { id: "lord", name: "Лорд", desc: "Полные права, префикс и VIP-чат.", price: 799 },
];
const presetAmounts = [100, 199, 399, 799];

export default function DonatePage() {
  const [selectedPerkId, setSelectedPerkId] = useState(perks[0].id);
  const [amount, setAmount] = useState(perks[0].price);
  const [nickname, setNickname] = useState("");

  const selectedPerk = perks.find((p) => p.id === selectedPerkId) ?? perks[0];
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        size: `${0.8 + ((index * 17) % 9) / 10}px`,
        opacity: 0.18 + ((index * 23) % 50) / 100,
      })),
    [],
  );

  const selectPerk = (perk: (typeof perks)[number]) => {
    setSelectedPerkId(perk.id);
    setAmount(perk.price);
  };

  const handleDonate = () => {
    if (!nickname.trim()) return;
    console.log({ nickname: nickname.trim(), amount, perk: selectedPerk.name });
  };

  return (
    <main className="donate-page">
      <div className="donate-moon" />
      <div className="donate-glow" />
      <div className="donate-stars" aria-hidden="true">
        {stars.map((s) => (
          <span key={s.id} style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.opacity }} />
        ))}
      </div>

      <section className="donate-panel">
        <div className="donate-badge"><span />Поддержать сервер</div>
        <h1 className="donate-title">Донат <span>Arcturu</span></h1>
        <p className="donate-subtitle">
          Поддержите сервер и получите привилегии. Каждый донат помогает развивать мир.
        </p>

        <div className="donate-perks">
          {perks.map((perk) => (
            <button
              key={perk.id}
              className={`donate-perk ${perk.id === selectedPerkId ? "selected" : ""}`}
              type="button"
              onClick={() => selectPerk(perk)}
            >
              <span className="donate-perk-plus">+</span>
              <span className="donate-perk-name">{perk.name}</span>
              <span className="donate-perk-desc">{perk.desc}</span>
              <span className="donate-perk-price">{perk.price} ₽ <small>/ мес.</small></span>
            </button>
          ))}
        </div>

        <hr className="donate-divider" />

        <label className="donate-field">
          <span>Никнейм</span>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Ваш ник на сервере"
          />
        </label>

        <div className="donate-field">
          <span>Сумма</span>
          <div className="donate-amounts">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                className={`donate-amount ${amount === preset ? "active" : ""}`}
                type="button"
                onClick={() => setAmount(preset)}
              >
                {preset} ₽
              </button>
            ))}
          </div>
          <input
            type="number"
            min="1"
            value={presetAmounts.includes(amount) ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Другая сумма..."
          />
        </div>

        <button className="donate-submit" type="button" onClick={handleDonate}>
          <span>✦</span>
          {amount > 0
            ? `Задонатить ${amount.toLocaleString("ru-RU")} ₽ — ${selectedPerk.name}`
            : "Введите сумму"}
        </button>

        <p className="donate-fine-print">
          Привилегия выдаётся в течение 5 минут после оплаты. Возврат не предусмотрен.
          <br />
          Поддержка: discord.arcturu.net
        </p>
      </section>
    </main>
  );
}
