import {
  Rocket,
  Smartphone,
  Palette,
  Wrench,
} from "lucide-react";

function Feature({
  badge = "WHY US",
  title = "왜 저희를 선택해야 할까요?",
  subtitle = "고객이 가장 중요하게 생각하는 요소를 담았습니다.",

  features = [
    {
      icon: Rocket,
      title: "빠른 제작",
      description: "기획부터 배포까지 빠르고 체계적으로 진행합니다.",
    },
    {
      icon: Smartphone,
      title: "반응형 웹",
      description: "모든 디바이스에서 최적의 화면을 제공합니다.",
    },
    {
      icon: Palette,
      title: "트렌디한 디자인",
      description: "심플하면서도 신뢰감을 주는 UI를 제작합니다.",
    },
    {
      icon: Wrench,
      title: "유지보수",
      description: "관리하기 쉬운 구조와 유지보수를 제공합니다.",
    },
  ],
}) {
  return (
    <section className="feature section">

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