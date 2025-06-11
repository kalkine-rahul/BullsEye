import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="col-span-1">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">BullsEye™</h2>
          <p className="text-sm">
            Your trusted source for curated financial insights, trends, and tools.
          </p>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-gray-700 dark:text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-gray-700 dark:text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-gray-700 dark:text-white mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Cookies Policy</a></li>
          </ul>
        </div>

      
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold">BullsEye™</span>. All rights reserved.
      </div>
    </footer>
  );
}
