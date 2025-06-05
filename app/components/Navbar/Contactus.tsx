"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const Contactusform = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(inputValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      setInputValues({ name: "", email: "", message: "" });
    } catch (error) {
      alert("There was a problem submitting the form.");
    }
  };

  const isDisabled = Object.values(inputValues).some((val) => val === "");

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
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                  <div className="flex items-center justify-center">
                    <Link
                      href="/"
                      className="text-2xl sm:text-4xl font-semibold text-black"
                    >
                      Kev Builds
                    </Link>
                  </div>
                  {submitted ? (
                    <p className="mt-6 text-center text-green-600 font-semibold">
                      Thanks for getting in touch! I’ll get back to you soon.
                    </p>
                  ) : (
                    <>
                      <p className="mb-8 mt-8 font-light text-center text-gray-500 sm:text-xl">
                        Contact me now
                      </p>
                      <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="space-y-8"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <div hidden>
                          <input name="bot-field" />
                        </div>

                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Your Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            value={inputValues.name}
                            onChange={handleChange}
                            type="text"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Name..."
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Your Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            value={inputValues.email}
                            onChange={handleChange}
                            type="email"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={inputValues.message}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Leave a message..."
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isDisabled}
                          className="w-full py-3 px-5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50"
                        >
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
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

