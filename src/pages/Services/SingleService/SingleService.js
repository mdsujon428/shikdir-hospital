import { useEffect,useState} from 'react';
import { useParams } from 'react-router';



const SingleService = () => {
    const [services, setServices] = useState([])
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    
   console.log(services)
    return (
        <div>
            <h1>This is single {serviceId}</h1>
        </div>
    );
};

export default SingleService;