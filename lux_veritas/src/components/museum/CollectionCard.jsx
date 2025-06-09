import museumData from '../../data/museums.json';

export default function CollectionCard({ item }) {
    const museum = museumData.find((m) => m.id === item.museumId);

    return (
        <div>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Museum: {museum ? museum.name : "Tidak diketahui"}</p>
            <p>{item.description}</p>
        </div>
    )
}