import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/me.png" alt="picture of Kevin" width={416} height={530} className="mx-auto md:mx-0 rounded-[25px]" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicated to helping peoples design needs.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Every idea deserves a space to shine and I’m here to design that space. From bold visuals to seamless user journeys, I craft websites that don’t just exist online - they stand out, tell your story, and connect with your audience in meaningful ways.</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 text-center lg:text-start"> Kevin Holm  <br />07496 981494 <br />info@kevbuilds.co.uk</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
