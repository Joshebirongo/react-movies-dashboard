import { useNavigate } from "react-router-dom";
import TechnologyCard from "../components/TechnologyCard";
export default function AboutPage() {
    const navigate = useNavigate();
    const technologies = [
        {
            id: 1,
            name: "React",
            description: "JavaScript library for building user interfaces."
        },
        {
            id: 2,
            name: "React Router",
            description: "React Router is a routing library for React that enables navigation between different pages or view in SPA without reloading the browser."
        },
        {
            id: 3,
            name: "Axios",
            description: "HTTP client for making API requests and handling server communication."
        },
        {
            id: 4,
             name: "Bootstrap",
            description: "CSS framework for responsive design."
        },
        {
            id: 5,
            name: "TVMaze API",
            description: "Public API providing television show and episode data for web applications."
        }
    ];
    return (
        <div className="about-page">
            <button
                className="btn btn-dark mb-4"
                onClick={() => navigate(-1)}
            >
                ⬅️ Back
            </button>
            <h1>About React Movies Dashboard</h1>

            <p>
                This application allows users to
                search and discover TV shows using data
                from the TVMaze API.
                
            </p>
            <section>
                {technologies.map((technology) =>(
                    <TechnologyCard
                    key={technology.id}
                    name={technology.name}
                    description={technology.description}
                    />
                ))}
            </section>
        </div>  
    );
}