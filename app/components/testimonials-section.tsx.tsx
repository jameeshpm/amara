'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../constants/data'

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    return (
        <section id="testimonials-section" className="py-12 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-4xl font-medium font-raleway leading-8 md:leading-10 tracking-wider text-black mb-6 text-center text-shadow-custom">
                    What our customers say
                </h2>

                <div className="max-w-4xl mx-auto relative border-black shadow-xl">
                    {/* Testimonial Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">

                            <div className="flex flex-col items-center space-y-4 relative">
                                <div className="absolute -right-4 top-1/2 transform -translate-y-28 w-40 h-40 md:w-56 md:h-56 bg-contain bg-center" style={{ backgroundImage: 'url(/bg.png)' }}></div>
                                <div className="w-32 h-32 md:w-56 md:h-56 overflow-hidden flex-shrink-0 relative bg-white z-8 bg-white bg-opacity-20">
                                    <Image
                                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                                        alt={testimonials[currentTestimonial].name}
                                        width={224}
                                        height={224}
                                        className="w-full h-full object-cover relative z-10"
                                    />
                                </div>
                                <h3 className="text-lg md:text-xl font-medium text-gray-800 font-raleway font-bold text-darkgrey">
                                    {testimonials[currentTestimonial].name}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="flex flex-col items-center relative">

                                        <span className="absolute top-0 left-0 -translate-x-6 -translate-y-8 m-10">
                                            <Image
                                                src="/wing1.png"
                                                alt="Opening quote"
                                                width={48}
                                                height={48}
                                            />
                                        </span>

                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center mb-4 m-14 max-w-2xl h-[150px] overflow-y-auto font-raleway">
                                            {testimonials[currentTestimonial].text}
                                        </p>


                                        <span className="absolute bottom-0 right-0 translate-x-6 translate-y-6 m-7">
                                            <Image
                                                src="/wing2.png"
                                                alt="Closing quote"
                                                width={48}
                                                height={48}
                                            />
                                        </span>
                                    </div>
                                    {/* Rating stars */}
                                    <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`w-6 h-6 md:w-8 md:h-8 ${index < testimonials[currentTestimonial].rating
                                                    ? 'text-orange-500 fill-orange-500'
                                                    : 'text-gray-200 fill-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors lg:-ml-10 md:-ml-14"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors lg:-mr-10 md:-mr-14"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    )
}
