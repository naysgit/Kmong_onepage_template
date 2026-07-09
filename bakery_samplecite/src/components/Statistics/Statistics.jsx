import { Wheat, CalendarDays, Users, Sparkles } from "lucide-react";

function Statistics({
  badge = "OUR STORY",
  title = "매일 신선한 재료로",
  subtitle = "좋은 재료와 정성으로 만든 빵을 제공합니다.",

  stats = [
    { icon: Wheat, number: "20+", label: "매일 굽는 빵 종류" },
    { icon: CalendarDays, number: "10", label: "운영 연차" },
    { icon: Users, number: "5000+", label: "단골 고객" },
    { icon: Sparkles, number: "100%", label: "당일 생산" },
  ],
}) {
  return (
    <section className="statistics section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="statistics-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="statistics-card" key={index}>
                <div className="statistics-icon">
                  <Icon size={30} />
                </div>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
