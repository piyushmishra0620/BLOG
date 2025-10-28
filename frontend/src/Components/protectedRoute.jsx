import {useAuth} from '../Hooks/useAuth';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children})=>{
    const {state} = useAuth();
    const user = state.user;    
    return user? children : (<Navigate to="/Auth" replace={true}/>);
}

export default ProtectedRoute;
