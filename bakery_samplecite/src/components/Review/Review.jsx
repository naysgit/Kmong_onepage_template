import { Star } from "lucide-react";

function Review({
  badge = "REVIEW",
  title = "고객 후기",
  subtitle = "Maison Bakery를 다녀가신 분들의 실제 후기입니다.",

  reviews = [
    {
      name: "김민수",
      company: "동네 단골",
      comment: "매일 아침 소금빵 사러 오는데 항상 신선하고 맛있어요.",
    },
    {
      name: "이지은",
      company: "직장인 손님",
      comment: "케이크 퀄리티가 정말 좋아서 생일마다 여기서 주문해요.",
    },
    {
      name: "박준영",
      company: "가족 단위 방문",
      comment: "매장이 아늑하고 아이들과 함께 가기 좋아요. 추천합니다.",
    },
  ],
}) {
  return (
    <section className="review section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="review-comment">"{review.comment}"</p>

              <div className="review-user">
                <div className="review-avatar">{review.name[0]}</div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
