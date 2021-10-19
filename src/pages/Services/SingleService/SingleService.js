import { useParams } from 'react-router';


const SingleService = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is single {serviceId}</h1>
        </div>
    );
};

export default SingleService;