import {
  Coffee,
  Heart,
  Leaf,
  Smile,
} from "lucide-react";

function Feature({
  badge = "ABOUT",
  title = "허니빈 카페를 소개합니다",
  subtitle = "작지만 진심을 담은 공간에서 편안한 시간을 보내세요.",

  features = [
    {
      icon: Coffee,
      title: "신선한 원두",
      description: "매주 로스팅한 신선한 원두로 향긋한 커피를 내려드려요.",
    },
    {
      icon: Heart,
      title: "아늑한 공간",
      description: "오래 머물고 싶은 따뜻하고 포근한 인테리어예요.",
    },
    {
      icon: Leaf,
      title: "건강한 재료",
      description: "좋은 재료만 골라 정성껏 디저트를 만들어요.",
    },
    {
      icon: Smile,
      title: "친절한 응대",
      description: "작은 배려로 하루를 기분 좋게 만들어 드려요.",
    },
  ],
}) {
  return (
    <section className="feature section" id="about">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            {badge}
          </span>

          <h2 className="section-title">
            {title}
          </h2>

          <p className="section-subtitle">
            {subtitle}
          </p>

        </div>

        <div className="feature-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                className="feature-card"
                key={index}
              >

                <div className="feature-icon">

                  <Icon
                    size={34}
                    strokeWidth={2}
                  />

                </div>

                <h3>

                  {feature.title}

                </h3>

                <p>

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Feature;
