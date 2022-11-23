import {useDispatch} from "react-redux";
import {addPost} from "./features/addPost/addPostSlice";
import ReactTimeAgo from "react-time-ago";
import location from '../public/location.svg'
import Image from "next/image";
import Link from "next/link";


const Posts = ({posts,loading}:any) => {

    const dispatch = useDispatch()

    const reverse = require('reverse-geocode')

    if (loading){
        return <h2>loading...</h2>
    }


    return (
        <div className='grid justify-center'>
            {posts.map((post:any)=>(
                <Link onClick={()=>dispatch(addPost(post))} href='./post' key={post.id} className='cursor-pointer
                hover:shadow-lg shadow-black-500/50 inline-flex bg-white m-1 place-items-center rounded-lg'>
                    <img className='rounded-full h-20 w-20 ml-3 mr-3' src={post.pictures[1]} alt=''/>
                    <div className='grid mt-5'>
                        <div className='font-bold font-semibold'>{post.title}</div>
                        <div>{post.name} • {post.address} {typeof post}</div>
                        <div className='flex text-gray-400'>
                            <Image className='w-5 h-5 ' src={location} alt='fg'/>
                            <h1 className='mr-4'>{reverse.lookup(post.location.lat, post.location.long, 'us').city}</h1>
                            <h1>{reverse.lookup(post.location.lat, post.location.long, 'us').state}</h1>
                                <div className='ml-5 text-gray-400'>
                                    <ReactTimeAgo date={post.updatedAt}/>
                                </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Posts;
