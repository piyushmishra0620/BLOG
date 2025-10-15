import {useAuth} from '../Contexts/authContext';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children})=>{
    const {user} = useAuth();
    return user? children : (<Navigate to="/Auth" replace={true}/>);
}

export default ProtectedRoute;