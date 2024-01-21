
interface HomePageCardProps{
    year: string;
    percent: string;
    average: string;
}
export default function HomePageCard({year, percent, average}: HomePageCardProps) {
    return (
        <div
            className={'flex flex-col justify-between items-center w-[207px] h-[220px] rounded-2xl font-poppins rounded-lg shadow-2xl '}
        >
            {/* Header */}
            <div
                className={'flex  ml-2 text-center text-2xl font-bold p-2 '}
                >

                    {year}

            </div>
            {/* Body */}
            <div
                className={'flex justify-center items-start  ml-2 text-center text-2xl font-bold pt-5'}
                >

                    {percent}%

            </div>
            {/* Footer */}
            <div className={'flex p-5'}>

                {average}% average
            </div>
        </div>
    )
}