import { ExternalLink } from "lucide-react";

function Portfolio({

    badge = "GALLERY",

    title = "허니빈 카페 갤러리",

    subtitle = "아늑한 공간과 맛있는 순간들을 만나보세요.",

    projects = [

        {
            title: "시그니처 라떼",
            category: "Coffee",
            image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        },

        {
            title: "아늑한 좌석",
            category: "Interior",
            image:
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
        },

        {
            title: "갓 구운 디저트",
            category: "Dessert",
            image:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
        },

        {
            title: "핸드드립 커피",
            category: "Coffee",
            image:
                "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
        },

        {
            title: "브런치 플레이트",
            category: "Brunch",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        },

        {
            title: "테라스 좌석",
            category: "Terrace",
            image:
                "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800",
        }

    ]

}) {

    return (

        <section className="portfolio section" id="gallery">

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

                <div className="portfolio-grid">

                    {projects.map((project, index) => (

                        <div

                            key={index}

                            className="portfolio-card"

                        >

                            <img

                                src={project.image}

                                alt={project.title}

                            />

                            <div className="portfolio-overlay">

                                <span>

                                    {project.category}

                                </span>

                                <h3>

                                    {project.title}

                                </h3>

                                <button>

                                    자세히 보기

                                    <ExternalLink size={18} />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Portfolio;
