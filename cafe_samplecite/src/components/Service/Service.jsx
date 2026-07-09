import {
  Coffee,
  Milk,
  IceCream,
  Cookie,
  Cake,
  Sandwich,
  ArrowRight,
} from "lucide-react";

function Service({
  badge = "MENU",
  title = "시그니처 메뉴",
  subtitle = "허니빈 카페에서 가장 사랑받는 메뉴들을 소개해요.",

  columns = 3,

  services = [
    {
      icon: Coffee,
      title: "아메리카노",
      description: "깊고 진한 에스프레소와 물의 조화 · 4,000원",
    },
    {
      icon: Milk,
      title: "카페라떼",
      description: "부드러운 우유 거품이 가득 · 4,500원",
    },
    {
      icon: IceCream,
      title: "바닐라 아포가토",
      description: "아이스크림과 에스프레소의 만남 · 5,500원",
    },
    {
      icon: Cookie,
      title: "수제 쿠키",
      description: "매일 아침 직접 구운 바삭한 쿠키 · 3,500원",
    },
    {
      icon: Cake,
      title: "티라미수",
      description: "진한 커피향 가득한 수제 티라미수 · 6,000원",
    },
    {
      icon: Sandwich,
      title: "브런치 샌드위치",
      description: "신선한 재료로 만든 든든한 한끼 · 7,500원",
    },
  ],
}) {
  return (
    <section className="service section" id="menu">

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

               

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Service;
