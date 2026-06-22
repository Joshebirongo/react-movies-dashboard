 export default function TechnologyCard({name, description}) {
    return (
        <div className="card p-3 mb-3 my-card">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
 }