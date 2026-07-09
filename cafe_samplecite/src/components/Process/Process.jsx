import {
  ClipboardList,
  ShoppingBag,
  CreditCard,
  Smile,
} from "lucide-react";

function Process({
  badge = "ORDER",
  title = "이용 안내",
  subtitle = "포장 주문은 이렇게 진행돼요.",

  steps = [
    {
      icon: ClipboardList,
      title: "메뉴 선택",
      description: "원하시는 메뉴를 골라주세요.",
    },
    {
      icon: ShoppingBag,
      title: "주문하기",
      description: "카운터 또는 앱으로 주문해 주세요.",
    },
    {
      icon: CreditCard,
      title: "결제하기",
      description: "다양한 결제 수단을 이용할 수 있어요.",
    },
    {
      icon: Smile,
      title: "맛있게 즐기기",
      description: "완성된 메뉴를 맛있게 즐겨보세요!",
    },
  ],
}) {
  return (
    <section className="process section" id="order">

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

        <div className="process-list">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                className="process-item"
                key={index}
              >

                <div className="process-number">

                  {String(index + 1).padStart(2, "0")}

                </div>

                <div className="process-icon">

                  <Icon size={30} />

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
