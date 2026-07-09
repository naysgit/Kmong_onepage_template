import { Image as ImageIcon } from "lucide-react";

function Hero({
  badge = "ARTISAN BAKERY",
  title = "매일 아침, 갓 구운 빵",
  description = "좋은 재료와 정직한 손길로 굽는 프리미엄 베이커리, Maison Bakery입니다.",
  primaryButton = "메뉴 보기",
  secondaryButton = "매장 안내",
  image = null,
}) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* 왼쪽 */}
        <div className="hero-content">
          <span className="hero-badge">{badge}</span>

          <h1>{title}</h1>

          <p>{description}</p>

          <div className="hero-buttons">
            <button className="primary-btn">{primaryButton}</button>
            <button className="secondary-btn">{secondaryButton}</button>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="hero-image">
          <div className="image-card">
            {image ? (
              <img src={image} alt="매장 대표 이미지" />
            ) : (
              /* TODO: 매장 대표 사진 또는 시그니처 빵 사진으로 교체 (권장 800x1000px, 세로형) */
              <div className="img-placeholder">
                <ImageIcon size={32} />
                <span>대표 이미지<br />(예: 매장 전경, 시그니처 빵)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
