import {
  FolderOpen,
  Users,
  Award,
  Clock,
} from "lucide-react";

function Statistics({
  badge = "ACHIEVEMENT",
  title = "숫자로 증명하는 결과",
  subtitle = "프로젝트 경험과 고객 만족을 바탕으로 신뢰를 제공합니다.",

  stats = [
    {
      icon: FolderOpen,
      number: "120+",
      label: "Completed Projects",
    },
    {
      icon: Users,
      number: "80+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: Clock,
      number: "24H",
      label: "Support",
    },
  ],
}) {

  return (

    <section className="statistics section">

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

        <div className="statistics-grid">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                className="statistics-card"
                key={index}
              >

                <div className="statistics-icon">

                  <Icon size={34} />

                </div>

                <h3>

                  {item.number}

                </h3>

                <p>

                  {item.label}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default Statistics;