import { useEffect, useState } from "react";

function ModelList() {
    const [manufacturers, setManufacturers] = useState({
        href: '',
        id: '',
        name: ''
    })
    const [models, setModels] = useState([{
        model: '',
        picture_url: '',
        manufacturer: '',
}])
async function newModel() {
    const response = await fetch('http://localhost:8100/api/models/');
    if (response.ok) {
        const data = await response.json();
        setModels(data.models)
}
    else {
        console.error('Error');
    }
}

async function newManufacturer() {
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers)
}
    else {
        console.error('Error');
    }
}

useEffect(() => {
    newModel();
}, []);

useEffect(() => {
    newManufacturer();
}, []);

if (models === undefined) {
    return null;
}

return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Picture</th>

            </tr>
        </thead>
        <tbody>
            {manufacturers && models.map(model => {
                return (
                    <tr key={model.id}>
                        <td>{model.name}</td>
                        <td>{model.manufacturer.name}</td>
                        <td><div><img className="img-fluid img-thumbnail" src={model.picture_url} alt={model.picture_url} picture_url={{ width: '100px', height: '100px' }} /></div></td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);
}

export default ModelList;
