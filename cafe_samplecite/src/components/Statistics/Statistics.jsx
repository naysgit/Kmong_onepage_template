import {
  Coffee,
  Users,
  Star,
  Clock,
} from "lucide-react";

function Statistics({
  badge = "STORY",
  title = "숫자로 보는 허니빈",
  subtitle = "오랜 시간 쌓아온 신뢰와 정성이에요.",

  stats = [
    {
      icon: Coffee,
      number: "8년",
      label: "운영 노하우",
    },
    {
      icon: Users,
      number: "1,200+",
      label: "단골 손님",
    },
    {
      icon: Star,
      number: "4.9",
      label: "평균 별점",
    },
    {
      icon: Clock,
      number: "365일",
      label: "연중 무휴",
    },
  ],
}) {

  return (

    <section className="statistics section" id="story">

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
