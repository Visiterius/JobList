import {useState} from 'react';

const Pagination = ({postPerPage,totalPosts,paginate}:any) => {
    
    const [num, setNum] = useState(1);

    const pageNumbers = []
    for (let i = 1; i<=Math.ceil(totalPosts / postPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <nav className='text-center'>
            <ul className='inline-flex items-center -space-x-px'>
                <li>
                    <a onClick={()=>{
                        setNum(num-1);paginate(num-1)
                    }} href="#"
                       className="block py-2 px-2 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg
                        hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1
                                  1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd">

                            </path>
                        </svg>
                    </a>
                </li>
                {pageNumbers.map(num=>(
                    <li key={num}>
                        <a className='py-1 px-3 text-xl active:border-b-4 border-blue-500 active:text-blue-700
                         focus:outline-none leading-tight text-gray-400 bg-white hover:bg-gray-100
                         hover:text-blue-900-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                         dark:hover:bg-gray-700 dark:hover:text-white' onClick={()=> {
                            paginate(num);setNum(num)
                        }} href='#' >
                            {num}
                        </a>
                    </li>
                ))}
                <li>
                    <a onClick={()=>{
                        setNum(num+1);paginate(num+1)
                    }} href="#"
                       className=" block py-2 px-2 leading-tight text-gray-500 bg-white rounded-r-lg
                        hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1
                                   1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
