import { Link } from "react-router-dom";

export default function MuseumCard ({ museum }) {
    return (
        <div>
            <img src="{museum.image}" alt="{museum.name}" />
            <div>
                <h3>{museum.name}</h3>
                <p>{museum.location}</p>
                <Link to={'/museums/${museum.id}'}>
                    Lihat Detail
                </Link>
            </div>
        </div>
    )
}