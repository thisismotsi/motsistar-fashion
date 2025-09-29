"use client";

import Image from "next/image";
import { Button } from "./Button";
import RecentPostCard from "./RecentPostCard";
import { allPosts } from "@/app/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const recentPosts = allPosts.slice(0, 3);

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 766 }, items: 1 },
  mobile: { breakpoint: { max: 766, min: 0 }, items: 1 },
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Side: Hero */}
        <motion.div
          className="relative flex-1 w-full md:w-2/3 min-h-[24rem] sm:min-h-[28rem] md:min-h-[28rem] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hero/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-navy/60 to-black/40 flex flex-col justify-center px-4 sm:px-8 md:px-12 py-6 sm:py-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ivory leading-tight mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Trusted Paths to Smarter Shopping
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-beige max-w-full sm:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              We cut through the noise—
              sourcing authentic products, safe transactions, and strategies
              that help you shop and earn with confidence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button variant="primary" size="md" href="/services">
                Explore Services
              </Button>
              <Button variant="secondary" size="md" href="/about">
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Carousel */}
        <motion.div
          className="w-full md:w-1/3 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-navy">
            Recent Insights
          </h3>
          <div className="bg-white rounded-2xl shadow-glow p-3">
            <Carousel
              responsive={responsive}
              infinite
              autoPlay={false}
              arrows
              keyBoardControl
              containerClass="overflow-hidden"
              itemClass="px-2"
              removeArrowOnDeviceType={["mobile"]}
            >
              {recentPosts.map((post) => (
                <RecentPostCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </Carousel>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
