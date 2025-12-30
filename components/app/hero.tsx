'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, Star } from 'lucide-react';

interface HeroProps {
  onStartCall?: () => void;
}

export default function Hero({ onStartCall }: HeroProps) {
  return (
    <div className="relative mx-8 my-3 flex h-[calc(100vh-120px)] flex-col items-center gap-8 overflow-hidden rounded-[2.5rem] border bg-linear-to-b from-gray-300 to-gray-100 p-6 lg:flex-row lg:justify-between lg:p-10">
      {/* Left Content */}
      <div className="z-10 flex-1 space-y-4 lg:space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold">20M+ User</p>
            <p className="text-sm text-gray-600">
              Read Our <span className="font-semibold underline">Success Stories</span>
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1
            className="text-[10rem] leading-tight font-medium tracking-tight text-black lg:text-[12rem]"
            style={{ fontFamily: 'Radley, serif' }}
          >
            Grow<sup className="text-8xl lg:text-8xl">+</sup>
          </h1>
          <div className="mt-3 h-1 w-full bg-black"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-gray-700 lg:text-lg"
        >
          Drive Sales Growth, And Harness Ai-Powered User Content — Up To 50× Faster.
        </motion.p>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm font-medium text-gray-400">Loved the performance</p>
              <p className="text-sm font-bold text-gray-400">100% Satisfied</p>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-black" />
              <span className="text-lg font-bold text-black">4.9</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onStartCall}
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Try it Now
          </button>
          <button className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100">
            Our Pricing
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      {/* Right Content - Image with Cards */}
      <div className="relative flex h-full w-full flex-1 items-center justify-center lg:w-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md"
        >
          {/* Main Image Container */}
          <div className="relative aspect-4/5 max-h-[70vh] w-full overflow-hidden rounded-3xl bg-linear-to-br from-orange-400 to-orange-500">
            <Image
              src="/sales.jpg"
              alt="Sales representative"
              fill
              className="object-cover"
              priority
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 lg:h-16 lg:w-16"
              >
                <Play className="ml-1 h-5 w-5 fill-black lg:h-6 lg:w-6" />
              </motion.div>
            </div>
          </div>

          {/* Floating Cards */}
          {/* Top Left - Questions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-2 left-2 space-y-2 lg:top-4 lg:left-4"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm lg:px-4 lg:py-2">
              <CheckCircle2 className="h-3 w-3 text-orange-500 lg:h-4 lg:w-4" />
              <span className="text-xs font-medium text-black lg:text-sm">
                Want to know about investment?
              </span>
            </div>
            <div className="mr-7 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm lg:mr-8 lg:px-4 lg:py-2">
              <CheckCircle2 className="h-3 w-3 text-blue-500 lg:h-4 lg:w-4" />
              <span className="text-xs font-medium text-black lg:text-sm">
                Like to collaborate?
              </span>
            </div>
          </motion.div>

          {/* Top Right - Sales Stats */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white-900/90 absolute -top-2 -right-2 rounded-2xl border p-3 shadow-xl backdrop-blur-sm lg:-top-4 lg:-right-4 lg:p-4"
          >
            <p className="mb-0.5 text-[10px] text-white/80 lg:mb-1 lg:text-xs">UP TO</p>
            <p className="mb-0.5 text-3xl font-bold text-white lg:mb-1 lg:text-4xl">60%</p>
            <p className="text-[10px] text-white lg:text-xs">More sales this week</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
