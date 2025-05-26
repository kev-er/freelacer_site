"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Starter Package from",
        price: 300,
        user: 'Up to 3 pages (e.g. Home, About, Contact)',
        button: "Contact for a quote",
        profiles: 'Clean, modern design',
        posts: 'Mobile-friendly and responsive',
        templates: "Basic on-page SEO",
        view: "Contact form setup",
        support: '2 revision round',
        category: 'monthly'
    },
    {
        heading: "Business Package from",
        price: 600,
        user: 'Up to 6 pages',
        button: "Contact for a quote",
        profiles: 'Mobile-optimised design',
        posts: 'Enhanced on-page SEO',
        templates: "CMS setup (e.g. WordPress) for easy updates",
        view: "2 revision rounds",
        support: '30 days post-launch support',
        category: 'monthly'
    },
    {
        heading: "Pro Package from",
        price: 1000,
        user: '8+ pages tailored to your brand',
        button: "Contact for a quote",
        profiles: 'Advanced SEO setup',
        posts: 'Speed and performance optimisation',
        templates: "3 revision rounds",
        view: "Full CMS training",
        support: '60 days post-launch support',
        category: 'monthly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Website Packages That Fit <br /> Your Business</h3>
                <p className='text-center mt-4'>From simple brochure sites to full-featured e-commerce, I offer clear, honest pricing with no hidden fees. <br /> Each package is designed to help your business grow online — fast, modern, and mobile-friendly.</p>
                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>No hidden fees</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Custom-built, responsive websites</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'> Support that grows with you</h4>
                    </div>
                </div>




                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>£{items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
