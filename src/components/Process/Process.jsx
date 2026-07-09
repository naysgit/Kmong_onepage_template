import {
  MessageCircle,
  FileText,
  Palette,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

function Process({
  badge = "PROCESS",
  title = "프로젝트 진행 과정",
  subtitle = "상담부터 배포까지 체계적인 프로세스로 진행합니다.",

  steps = [
    {
      icon: MessageCircle,
      title: "상담",
      description: "프로젝트 목적과 요구사항을 파악합니다.",
    },
    {
      icon: FileText,
      title: "기획",
      description: "사이트 구조와 기능을 설계합니다.",
    },
    {
      icon: Palette,
      title: "디자인",
      description: "브랜드에 맞는 UI/UX를 제작합니다.",
    },
    {
      icon: Code2,
      title: "개발",
      description: "반응형 웹을 구현합니다.",
    },
    {
      icon: Bug,
      title: "테스트",
      description: "오류 수정과 최적화를 진행합니다.",
    },
    {
      icon: Rocket,
      title: "배포",
      description: "최종 검수 후 서비스를 오픈합니다.",
    },
  ],
}) {
  return (
    <section className="process section">

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