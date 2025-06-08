import React from "react";
import Link from "next/link";

const navigation = [
  { name: 'About Me', href: '#aboutus-section', current: true },
  { name: 'Services', href: '#services-section', current: false },
  { name: 'FAQ', href: '#faq-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Drawerdata = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-purple-600'
                    : 'text-black hover:bg-gray-700 hover:text-purple-600',
                  'block py-2 rounded-md text-base font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <button
              className="bg-navyblue w-full hover:text-white text-white border border-purple-600 font-medium py-2 px-4 rounded"
              onClick={openModal}
              type="button"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawerdata;
