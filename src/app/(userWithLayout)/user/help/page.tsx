"use client";

import Button from "@/components/ui/button";
import { Mail, Phone, MessageSquare, LifeBuoy } from "lucide-react";

const HelpSupport = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Help & Support
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          We're here to help. Reach out to us with any questions or concerns.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 border rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4 text-teal-600 dark:text-teal-300">
            <Mail className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Email Us</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Send us an email and we'll get back to you within 24 hours.
          </p>
          <Button variant="outline">support@govpharm.com</Button>
        </div>

        <div className="bg-white dark:bg-slate-800 border rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4 text-teal-600 dark:text-teal-300">
            <Phone className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Call Us</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Our support team is available 9am–6pm Monday to Friday.
          </p>
          <Button variant="outline">+1 (800) 123-4567</Button>
        </div>

        <div className="bg-white dark:bg-slate-800 border rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4 text-teal-600 dark:text-teal-300">
            <MessageSquare className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Live Chat</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Chat live with our support team during business hours.
          </p>
          <Button>Start Chat</Button>
        </div>

        <div className="bg-white dark:bg-slate-800 border rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4 text-teal-600 dark:text-teal-300">
            <LifeBuoy className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">FAQs & Guides</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Browse common questions and step-by-step instructions.
          </p>
          <Button variant="ghost">View Help Center</Button>
        </div>
      </div>
    </section>
  );
};
export default HelpSupport;
