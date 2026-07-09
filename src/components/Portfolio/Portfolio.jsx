import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Portfolio({

    badge = "PORTFOLIO",

    title = "최근 프로젝트",

    subtitle = "다양한 업종의 프로젝트를 성공적으로 제작했습니다.",

    projects = [

        {
            title: "Corporate Website",
            category: "Business",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        },

        {
            title: "Coffee Brand",
            category: "Cafe",
            image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        },

        {
            title: "Shopping Mall",
            category: "E-Commerce",
            image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
        },

        {
            title: "Medical Service",
            category: "Hospital",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
        },

        {
            title: "Travel Platform",
            category: "Travel",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        },

        {
            title: "Restaurant",
            category: "Restaurant",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        }

    ]

}) {

    return (

        <section className="portfolio section">

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

                        <motion.div

                            key={index}

                            className="portfolio-card"

                            whileHover={{ y: -10 }}

                            transition={{ duration: .3 }}

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

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Portfolio;