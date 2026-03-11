'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const galleryImages = [
  // {
  //   src: '/images/arun-solanki-award-2023.jpg',
  //   alt: 'Arun Solanki - Award 2023',
  //   title: 'Award 2023 Ceremony',
  //   category: 'Awards'
  // },
  {
    src: '/images/arun-solanki-shining-star-award.jpg',
    alt: 'Arun Solanki - Shining Star of the Year 2023',
    title: 'Shining Star of the Year 2023',
    category: 'Awards'
  },
  {
    src: '/images/arun-solanki-professional-portrait.jpg',
    alt: 'Arun Solanki - Professional Portrait',
    title: 'NITSAN Anniversary',
    category: 'Work'
  },
  {
    src: '/images/arun-solanki-working-at-nitsan.jpg',
    alt: 'Arun Solanki - Trip',
    title: 'Collaborating at Trip',
    category: 'Trip'
  },
  {
    src: '/images/arun-solanki-event-speaker.jpg',
    alt: 'Arun Solanki - Event Speaker',
    title: '',
    category: 'Business Trip'
  },
  {
    src: '/images/arun-solanki-tech-conference.jpg',
    alt: 'Arun Solanki - Tech Conference',
    title: '',
    category: 'Business Trip'
  },
  {
    src: '/images/arun-solanki-team-collaboration.jpg',
    alt: 'Arun Solanki - Team Collaboration',
    title: 'Strategic Planning Session',
    category: 'Work'
  },
  {
    src: '/images/arun-solanki-ai-visualization.png',
    alt: 'Arun Solanki - Accessibility Workshop',
    title: 'Accessibility Workshop Lead',
    category: 'Workshop'
  },
  {
    src: '/images/arun-solanki-accessibility-workshop.jpg',
    alt: 'Arun Solanki',
    title: '',
    category: 'Business Trip'
  }
];

export default function ImageGallery({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <section id={id} className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Visual Highlights
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A glimpse into my professional journey, achievements, and technical contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">{image.category}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{image.title}</h3>
              </div>
              {/* Decorative Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Selected visual highlight"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors backdrop-blur-md z-[10000]"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
