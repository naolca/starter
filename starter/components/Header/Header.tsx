import Image from 'next/image';
import Link from 'next/link';
import {Inter, Montserrat} from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })

export const navData = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'success', path: '/success-stories' },
    { name: 'blogs', path: '/blogs' },
    { name: 'teams', path: '/teams' },
    {
        name: 'get involved',
        path: '/getInvolved',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

export default function Header() {
    return (



            <nav className={`flex justify-between m-5`}>
                {/* Image */}
                <img
                    src={'logo.png'}
                    alt={'next'}
                    width={120}
                    height={120}
                    className={'p-3 m-2 mt-auto flex'}
                />




                {/* Navigation items */}
                <div className={'flex gap-x-7'}>
                    {navData.map((item, index) => (
                        <Link href={item.path} key={index} className={`flex relative`}>
                            <div className={`text-lg flex after:content-[""] after:absolute after:bottom-2 after:h-1 after:w-full after:bg-primary after:rounded-t-md`}>{item.name}</div>
                        </Link>
                    ))}
                </div>





                {/* Social media icons */}
                <div
                className={`flex gap-x-4`}
                >
                    {/*Login*/}
                    <div
                    className={`ml-4 flex`}
                    >
                        <Link href={`login`} className={``}>
                            <div className={`text-lg font-medium px-5 py-2.5 ${montserrat.className}`}>Login</div>
                        </Link>

                    </div>
                    {/*Donate */}
                    <div>

                        <Link href={'Donate'} className={''}>
                            <button
                                    className="text-lg font-medium text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                            >
                                Default
                            </button>
                        </Link>

                    </div>


                </div>
            </nav>

    );
}
