import { Wheat, Clock, Coffee, Heart } from "lucide-react";

function Feature({
  badge = "WHY US",
  title = "왜 Maison Bakery일까요?",
  subtitle = "빵 하나에도 정성을 담는 이유입니다.",

  features = [
    {
      icon: Wheat,
      title: "좋은 재료만",
      description: "국산 밀가루와 발효 버터 등 검증된 재료만 사용합니다.",
    },
    {
      icon: Clock,
      title: "매일 아침 굽는 빵",
      description: "전날 반죽해 새벽부터 구워내는 신선함 그대로 제공합니다.",
    },
    {
      icon: Coffee,
      title: "편안한 매장",
      description: "빵과 커피를 여유롭게 즐길 수 있는 아늑한 공간입니다.",
    },
    {
      icon: Heart,
      title: "정성스런 손길",
      description: "모든 과정을 손으로 직접 만들어 정직한 맛을 지킵니다.",
    },
  ],
}) {
  return (
    <section className="feature section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={30} strokeWidth={2} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Feature;
