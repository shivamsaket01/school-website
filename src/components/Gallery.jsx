import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Filter } from 'lucide-react';

const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', category: 'Campus' },
    { id: 2, src: 'https://images.unsplash.com/photo-1544963503-4f932e646274?q=80&w=1588&auto=format&fit=crop', category: 'Students' },
    { id: 3, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop', category: 'Campus' },
    { id: 4, src: 'https://images.unsplash.com/photo-1565514020125-fac51fd79906?q=80&w=1587&auto=format&fit=crop', category: 'Sports' },
    { id: 5, src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop', category: 'Arts' },
    { id: 6, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop', category: 'Students' },
    { id: 7, src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop', category: 'Science' },
    { id: 8, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop', category: 'Events' },
];

const categories = ['All', 'Campus', 'Students', 'Sports', 'Arts', 'Science', 'Events'];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-school-primary uppercase mb-3 block"
                    >
                        Campus Life
                    </motion.span>
                    <h3 className="text-4xl md:text-6xl font-playfair font-bold text-school-secondary mb-8">
                        Moments of <span className="text-gradient">Excellence</span>
                    </h3>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat
                                        ? 'bg-school-primary text-white shadow-lg shadow-pink-500/30'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="break-inside-avoid relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-premium"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.category}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-school-primary text-white text-xs font-bold rounded-full mb-2">{image.category}</span>
                                        <h4 className="text-white font-playfair text-xl font-bold">View Selection</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Video Tour Section */}
                <div className="mt-32">
                    <div className="relative rounded-[3rem] overflow-hidden group h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                            alt="Campus Tour Placeholder"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 bg-school-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-pink-500/50 mb-8"
                            >
                                <Play size={40} fill="currentColor" />
                            </motion.button>
                            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">Virtual Campus Tour</h3>
                            <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">Experience the life at Excellence Academy from the comfort of your home. A cinematic journey through our halls and heart.</p>
                        </div>
                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-8 right-8 text-white hover:text-school-primary transition-colors z-50">
                                <X size={40} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedImage.src}
                                alt={selectedImage.category}
                                className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-bold tracking-widest uppercase text-sm">
                                {selectedImage.category}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Gallery;

