"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const Contactusform = ({
    isOpen,
    closeModal,
}: {
    isOpen: boolean;
    closeModal: () => void;
}) => {
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputValues(prev => ({ ...prev, [name]: value }));
    };

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email: ${inputValues.input2}, Message: ${inputValues.input3}`);
        closeModal();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const isDisabled = Object.values(inputValues).some((val) => val === '');

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                    <div className="flex flex-shrink-0 items-center justify-center">
                                        <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                            Kev Builds
                                        </Link>
                                    </div>
                                    <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                        Contact me now
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                            <input
                                                id="name"
                                                name="input1"
                                                value={inputValues.input1}
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                placeholder="Name..."
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                            <input
                                                id="email"
                                                name="input2"
                                                value={inputValues.input2}
                                                onChange={handleChange}
                                                type="email"
                                                required
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                placeholder="you@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                                            <textarea
                                                id="message"
                                                name="input3"
                                                value={inputValues.input3}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                placeholder="Leave a message..."
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={handleClick}
                                            disabled={isDisabled}
                                            className="w-full py-3 px-5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Contactusform;

