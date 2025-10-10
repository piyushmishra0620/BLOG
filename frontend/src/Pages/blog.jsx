import {useParams} from 'react-router-dom';
import {useBlog} from '../Hooks/usePost';

export default function Blog(){
    const {posts} = useBlog();
    return(
        <></>
    )
}
