import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">You deserve <br /> only the best.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Your goals shape the process. I create digital experiences that feel personal, purposeful, and perfectly on point.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg.svg" alt="office-image" height={584} width={755} />
            </div>
        </div>
    )
}

export default index;
