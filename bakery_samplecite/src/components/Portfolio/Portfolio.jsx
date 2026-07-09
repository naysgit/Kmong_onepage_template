import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

function Portfolio({
  badge = "GALLERY",
  title = "Our Bakery",
  subtitle = "따뜻한 공간과 다양한 베이커리를 만나보세요.",

  projects = [
    { title: "매장 전경", category: "Interior", image: null },
    { title: "시그니처 크루아상", category: "Bread", image: null },
    { title: "케이크 공방", category: "Cake", image: null },
    { title: "커피 & 디저트", category: "Cafe", image: null },
    { title: "베이킹 클래스", category: "Class", image: null },
    { title: "브런치 공간", category: "Brunch", image: null },
  ],
}) {
  return (
    <section className="portfolio section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                /* TODO: 실제 매장/제품 사진으로 교체 (권장 800x1000px) */
                <div className="img-placeholder">
                  <ImageIcon size={28} />
                  <span>{project.title} 사진</span>
                </div>
              )}

              <div className="portfolio-overlay">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <button>
                  자세히 보기
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
