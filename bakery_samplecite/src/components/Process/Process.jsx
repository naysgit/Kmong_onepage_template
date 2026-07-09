import { Phone, ChefHat, PackageCheck, Smile } from "lucide-react";

function Process({
  badge = "HOW TO ORDER",
  title = "이렇게 이용하세요",
  subtitle = "주문부터 픽업까지, 간단한 4단계입니다.",

  steps = [
    {
      icon: Phone,
      title: "주문하기",
      description: "전화 또는 온라인으로 원하는 메뉴를 주문합니다.",
    },
    {
      icon: ChefHat,
      title: "신선하게 준비",
      description: "주문 즉시 정성껏 굽고 포장을 준비합니다.",
    },
    {
      icon: PackageCheck,
      title: "픽업 또는 배달",
      description: "매장 방문 픽업 또는 원하는 장소로 배달합니다.",
    },
    {
      icon: Smile,
      title: "맛있게 즐기기",
      description: "따뜻하고 신선한 빵을 바로 즐기실 수 있습니다.",
    },
  ],
}) {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="process-list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="process-item" key={index}>
                <div className="process-number">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <div className="process-icon">
                  <Icon size={26} />
                </div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
