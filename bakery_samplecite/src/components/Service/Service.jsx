import { Croissant, Cake, Coffee, Sandwich, Cookie, Wheat } from "lucide-react";

function Service({
  badge = "MENU",
  title = "저희 메뉴를 소개합니다",
  subtitle = "매일 아침 정성껏 구워내는 빵과 디저트를 만나보세요.",

  columns = 3,

  services = [
    {
      icon: Croissant,
      title: "버터 크루아상",
      description: "겹겹이 쌓은 결이 살아있는 프랑스식 정통 크루아상.",
      price: "3,800원",
    },
    {
      icon: Wheat,
      title: "소금빵",
      description: "겉은 바삭, 속은 부드러운 국내산 버터 소금빵.",
      price: "3,200원",
    },
    {
      icon: Sandwich,
      title: "바게트 샌드위치",
      description: "직접 구운 바게트에 신선한 재료를 가득 채운 샌드위치.",
      price: "6,500원",
    },
    {
      icon: Cake,
      title: "시그니처 케이크",
      description: "제철 과일과 생크림으로 완성한 매장 대표 케이크.",
      price: "38,000원",
    },
    {
      icon: Cookie,
      title: "수제 쿠키",
      description: "매일 소량 생산하는 버터 향 가득한 수제 쿠키.",
      price: "2,500원",
    },
    {
      icon: Coffee,
      title: "커피 & 음료",
      description: "빵과 잘 어울리는 원두로 내린 커피와 음료.",
      price: "4,500원",
    },
  ],
}) {
  return (
    <section className="service section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div
          className="service-grid"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.price && (
                  <div className="service-price">{service.price}</div>
                )}
                <button className="service-btn">주문하기</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
