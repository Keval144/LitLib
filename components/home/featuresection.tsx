import { RiBookShelfLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdPhoneIphone, MdAnalytics } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { HiBolt } from "react-icons/hi2";
import clsx from "clsx";

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: <RiBookShelfLine size={40} className="text-primary" />,
    title: "Smart Cataloging",
    desc: "Automatically organize and categorize your entire book collection with intelligent tagging and search capabilities.",
  },
  {
    icon: <FaUsers size={40} className="text-primary" />,
    title: "Member Management",
    desc: "Effortlessly manage member profiles, track borrowing history, and handle renewals with our intuitive interface.",
  },
  {
    icon: <MdPhoneIphone size={40} className="text-primary" />,
    title: "Mobile Ready",
    desc: "Access your library system anywhere with our responsive design that works perfectly on all devices.",
  },
  {
    icon: <MdAnalytics size={40} className="text-primary" />,
    title: "Analytics Dashboard",
    desc: "Get insights into borrowing patterns, popular books, and member engagement with beautiful charts and reports.",
  },
  {
    icon: <FiLock size={40} className="text-primary" />,
    title: "Secure & Reliable",
    desc: "Your data is protected with enterprise-grade security and automated backups to keep everything safe.",
  },
  {
    icon: <HiBolt size={40} className="text-primary" />,
    title: "Lightning Fast",
    desc: "Search through thousands of books instantly with our optimized search engine and fast loading times.",
  },
];

// Card Component
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className={clsx(
        "bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6",
        "transition-transform duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-lg",
        "will-change-transform"
      )}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 text-white shadow-lg flex items-center justify-center">
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
        {feature.title}
      </h3>
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

// Section Component
export default function FeaturesSection() {
  return (
    <section
      className={clsx(
        "py-24 px-5 sm:px-10 bg-[var(--color-bg)]",
        "border-t border-[var(--color-border)]"
      )}
      id="features"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--color-text)] mb-12">
          Why Choose LitLib?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
