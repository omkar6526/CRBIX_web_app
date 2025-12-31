import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const listVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6 + i * 0.08,
      duration: 0.4,
    },
  }),
};

export default function CoursePlans() {
  return (
    <section className="py-16 bg-[#eefaff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-blue-900"
        >
          Choose a plan for your organization
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MONTHLY */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
            className="bg-white border rounded-xl p-6 text-left transition-all"
          >
            <div className="border-t-4 border-orange-500 items-center justify-center text-center pt-4">
              <h3 className="text-xl font-bold mb-1 ">Monthly Plan</h3>
              <p className="text-sm text-gray-600 mb-4">
                👥 Best for trial users
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md font-semibold mb-6 hover:bg-orange-50 transition"
              >
                Start subscription
              </motion.button>

              <p className="text-lg font-bold mb-1">₹299 for month per user</p>
              <p className="text-sm text-gray-500 mb-4">
                Premium access. No contracts.
              </p>

              <ul className="space-y-3 text-sm">
                {[
                  "Access to all beginner & intermediate courses",
                  "Certification prep",
                  "Goal-focused recommendations",
                  "Limited AI tools usage",
                  "Community access",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* QUARTERLY */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
            className="bg-white border rounded-xl p-6 text-left transition-all"
          >
            <div className="border-t-4 border-indigo-600 pt-4 items-center justify-center text-center" >
              <h3 className="text-xl font-bold mb-1">Quarterly Plan</h3>
              <p className="text-sm text-gray-600 mb-4">
                🏢 Best for serious learners
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md font-semibold mb-6 hover:bg-indigo-50 transition"
              >
                Start subscription
              </motion.button>

              <p className="text-lg font-bold mb-1">₹799 for quarter per user</p>
              <p className="text-sm text-gray-500 mb-4">
                Premium access. No contracts.
              </p>

              <ul className="space-y-3 text-sm">
                {[
                  "Advanced courses unlocked",
                  "Priority doubt support",
                  "Advanced analytics & insights",
                  "Project-based learning",
                  "Resume-ready projects",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* YEARLY */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
            className="bg-white border rounded-xl p-6 text-left transition-all"
          >
            <div className="border-t-4 border-pink-600 pt-4 items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-1">Yearly Plan</h3>
              <p className="text-sm text-gray-600 mb-4">
                🏢 Best value for every user
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-pink-600 text-pink-600 px-4 py-2 rounded-md font-semibold mb-6 hover:bg-pink-50 transition"
              >
                Start subscription
              </motion.button>

              <p className="text-lg font-bold mb-1">₹1,799 for year per user</p>
              <p className="text-sm text-gray-500 mb-4">
                Premium access. No contracts.
              </p>

              <ul className="space-y-3 text-sm">
                {[
                  "Everything in Growth",
                  "1:1 mentor session (monthly or quarterly)",
                  "Career roadmap",
                  "Job-ready projects",
                  "Customizable content & add-ons",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
