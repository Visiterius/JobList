import {useSelector} from 'react-redux';
import ReactTimeAgo from 'react-time-ago';
import {RootState} from '../app/store';
import Image from 'next/image';
import arrow from '../public/Arrow.svg'
import {useRouter} from "next/router";
import saveList from '../public/saveList.svg'
import share from  '../public/share.svg'
import React from "react";
import {GoogleMap,useLoadScript,MarkerF} from "@react-google-maps/api";


const Post = () => {

    const router = useRouter()
    const post:any = useSelector((state:RootState)=>state.addPost)

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:'AIzaSyARO5i4VKN51P5WTg9LGasb1IRm_YFP3fY'
    })

    const [lat,lng]:any = Object.entries(post.posts.location)

    if (!isLoaded) return <div>loading...</div>

    console.log(post)

    return (
        <div className='text-center m-4'>
            <span className='inline-block'>
          <div className='font-sans inline-flex space-x-96 mt-8'>
              <h1 className='absolute font-bold text-3xl leading-8 text-blue-900'>Job Details</h1>
              <section className='flex space-x-12 leading-10'>
                  <span className='flex space-x-2'>
                      <Image width='10' height='10' src={saveList} alt='share'/>
                  <h3 className='text-blue-900'>Save to my list</h3>
                  </span>
                  <span className='flex space-x-2'>
                  <Image width='10' height='10' src={share} alt='share'/>
                  <h3 className='text-blue-900'>Share</h3>
                  </span>
              </section>
          </div>
                <div className='h-12 w-32 bg-blue-900 rounded-lg text-white'>
                    <h2 className='pt-3'>APPLY NOW</h2>
                </div>
                        <div className='max-w-lg text-left text-3xl leading-normal text-blue-900'>
                    {post.posts.title}
                            <div className=' absolute h-6 not-italic font-bold text-xl leading-6 text-blue-900'>
                    € {post.posts.salary.split('').map((el:string)=>el==='k'?'000':el).join('')}
                    </div>
                    </div>
                <ReactTimeAgo className='absolute h-6 not-italic font-normal text-lg leading-6 text-gray-500'
                     date={post.posts.updatedAt}/>
                <div className='mt-8 max-w-lg text-left text-1xl leading-normal text-blue-900'>
                    {post.posts.description}
                </div>
                <div className='mt-2 text-left absolute h-6 not-italic font-bold text-xl leading-6 text-blue-900'>
                    Compensation & Benefits:
                </div>
                    <ul className='text-left mt-8'>
                        {post.posts.benefits.map((el:string)=>
                            <li className='space-y-1 max-w-md list-square list-inside text-blue-900 dark:text-gray-400'
                                key={el}>{el}</li>
                        )}
                    </ul>
                <div className='mt-8 h-12 w-32 bg-blue-900 rounded-lg text-white'>
                    <h2 className='pt-3'>APPLY NOW</h2>
                    <h1 className='mt-8 absolute h-8 font-bold text-3xl leading-8 text-blue-900'>
                Additional info
            </h1>
                </div>
                <span className='grid text-left'>
            <div className='mt-10 display-flex'>
                <h2 className=' mt-10 h-6 left-0  text-lg leading-6 text-blue-900'>Employment type</h2>
                {post.posts.employment_type.map((el:string)=>(
                    <button key={el} className=' m-3 h-12 w-56 left-0 top-0 rounded-lg rounded-lg bg-blue-200
                    text-blue-800 border-solid border-blue-500 border-2'>
                    <h2>{el}</h2>
                    </button>))}
            </div>
            <div className='mt-10 display-flex'>
                <h2 className=' h-6 left-0  text-lg leading-6 text-blue-900'>Benefits</h2>
                {post.posts.benefits.map((el:string)=>(
                    <button key={el} className=' m-3 h-12 w-56 left-0 top-0 rounded-lg bg-yellow-200
                    text-yellow-600 border-solid border-yellow-500 border-2'>
                        <h2>{el}</h2>
                    </button>
                ))}
            </div>
                </span>
                <h1 className='mt-8 absolute h-8 font-bold text-3xl leading-8 text-blue-900'>Attached images</h1>
                <div className='mt-20 flex'>
                    {post.posts.pictures.map((el:string)=>(
                        <img key={Math.random()} className='m-6 w-20 h-20 rounded-2xl' src={el} alt=""/>
                    ))}
                </div>
                <button onClick={()=>router.back()} className='float-left h-12 w-56 text-xs left-0 top-0
                 text-blue-900 font-bold rounded-lg bg-gray-300 inline-block'>
                    <Image width='10' height='10' className='ml-3 float-left ' src={arrow} alt=""/>
                    RETURN TO JOB BOARD
                </button>
                <div className='w-96 h-80 mt-16 bg-slate-800 mb-10 rounded-2xl text-center text-gray-50'>
                    <div className='absolute w-60 h-60 rounded-full bg-slate-900 z-10'>
                        <ul className='mt-10 ml-16 text-left'>
                            <li>{post.posts.name}</li>
                            <li>{post.posts.address}</li>
                            <li>{post.posts.phone}</li>
                            <li>{post.posts.email}</li>
                        </ul>
                    </div>
                <GoogleMap zoom={20} center={{lat:lat[1],lng:lng[1]}} mapContainerClassName='map-container'>
                    <MarkerF key={Math.random()} position={{lat:lat[1],lng:lng[1]}}/>
                </GoogleMap>
                </div>


                </span>
        </div>
    );
};

export default Post;
