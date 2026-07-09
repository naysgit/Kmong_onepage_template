import {
  Monitor,
  ShoppingCart,
  Smartphone,
  Palette,
  Settings,
  Rocket,
  ArrowRight,
} from "lucide-react";

function Service({
  badge = "SERVICE",
  title = "제공하는 서비스",
  subtitle = "다양한 웹 서비스를 고객의 목적에 맞게 제공합니다.",

  columns = 3,

  services = [
    {
      icon: Monitor,
      title: "기업 홈페이지",
      description: "기업의 브랜드와 신뢰도를 높이는 반응형 홈페이지 제작",
    },
    {
      icon: ShoppingCart,
      title: "쇼핑몰",
      description: "상품 판매를 위한 세련된 쇼핑몰 구축",
    },
    {
      icon: Smartphone,
      title: "반응형 웹",
      description: "모든 디바이스에서 최적화된 화면 제공",
    },
    {
      icon: Palette,
      title: "UI / UX",
      description: "사용자 중심의 직관적인 인터페이스 디자인",
    },
    {
      icon: Settings,
      title: "유지보수",
      description: "프로젝트 완료 후에도 안정적인 관리 지원",
    },
    {
      icon: Rocket,
      title: "최적화",
      description: "빠른 속도와 SEO를 고려한 퍼포먼스 향상",
    },
  ],
}) {
  return (
    <section className="service section">

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

        <div
          className="service-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                className="service-card"
                key={index}
              >

                <div className="service-icon">

                  <Icon size={34} />

                </div>

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.description}

                </p>

                <button className="service-btn">

                  자세히 보기

                  <ArrowRight size={18} />

                </button>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Service;