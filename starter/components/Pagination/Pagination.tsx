'use client';

interface PaginationProps{
    pageNumber:number;
    pageSize:number;
    totalTeamMembers:number;
    paginate:Function;

}
export  default function Pagination({pageNumber, pageSize, totalTeamMembers, paginate}: PaginationProps) {

        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(totalTeamMembers / pageSize); i++){
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className={'flex justify-center'}>
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            className={'mx-1'}
                        >
                            <div
                                className={`flex justify-center items-center w-8 h-8 rounded-xl bg-gray-200 shadow-2xl ${pageNumber === number ? 'bg-primary' : ''} `
                                }
                            >
                                <a
                                    
                                    onClick={() => paginate(number)}
                                    href={''}
                                    className={`${pageNumber === number ? 'text-white' : 'text-gray-500'} hover:text-gray-700`}
                                >
                                    {number}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        )
}