import {useEffect, useState} from "react";
import Posts from "./posts";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en.json'
import Pagination from "../components/pagination";

TimeAgo.addDefaultLocale(en)

const JobsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(7);

    useEffect(() => {
        const fetchPosts = async ()=>{
            setLoading(true)
            const res = await axios.get('https://api.json-generator.com/templates/' +
                'ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, []);

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (pageNumber:any) => setCurrentPage(pageNumber)

    return (
        <div className='bg-[#E6E9F2] justify-center'>
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    );
};

export default JobsList;
