import { Image as ImageIcon } from "lucide-react";

function Gallery({
  badge = "GALLERY",
  title = "매장을 둘러보세요",
  subtitle = "따뜻한 공간과 정성 가득한 빵을 만나보세요.",

  photos = [
    { title: "매장 전경", tag: "인테리어", image: null },
    { title: "시그니처 크루아상", tag: "빵", image: null },
    { title: "케이크 공방", tag: "케이크", image: null },
    { title: "커피 & 디저트", tag: "카페", image: null },
    { title: "베이킹 클래스", tag: "클래스", image: null },
    { title: "브런치 공간", tag: "좌석", image: null },
  ],
}) {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div className="gallery-card" key={index}>
              {photo.image ? (
                <img src={photo.image} alt={photo.title} />
              ) : (
                /* TODO: 실제 매장/제품 사진으로 교체 (권장 800x800px) */
                <div className="img-placeholder">
                  <ImageIcon size={26} />
                  <span>{photo.title} 사진</span>
                </div>
              )}

              <div className="gallery-caption">
                <span>{photo.tag}</span>
                <h3>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
