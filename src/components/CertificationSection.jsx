import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, BarChart3, ChevronRight } from 'lucide-react';

const GetCertified = () => {
  const stats = [
    {
      number: "8 Million+",
      label: "Careers advanced",
      icon: <TrendingUp size={24} />,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      number: "1,500",
      label: "Live classes every month",
      icon: <Users size={24} />,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      number: "85%",
      label: "Report career benefits",
      icon: <BarChart3 size={24} />,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-[#eaf9ff]  from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Certified.<br />
              <span className="text-blue-600">Get Ahead.</span>
            </h1>

            {/* Subtitle/Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-lg">
              Advance your career with industry-recognized certifications and hands-on learning.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
              onClick={() => {
                  document.getElementById("courses")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Explore Programs
                <ChevronRight className="ml-2" size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students learning and getting certified"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Cards */}
              <div className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">AWS Certified</div>
                    <div className="text-sm text-gray-600">94% pass rate</div>
                  </div>
                </div>
                <div className="text-gray-700">
                  Join 50,000+ professionals who got certified this year
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-blue-600 text-white rounded-xl p-4 shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Career Growth</div>
                    <div className="text-sm opacity-90">Avg. 40% salary hike</div>
                  </div>
                </div>
                <div className="opacity-90">
                  Certified professionals report better job opportunities
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetCertified;