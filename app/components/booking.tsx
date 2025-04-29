"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dayjs from "dayjs"
import { sendEmail } from "../actions/send-email"

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  // Load services dynamically
  const services = [
    {
      title: "Traditional Vedic Massage",
      price: 70.0,
    },
    {
      title: "Aromatherapy Package",
      price: 70.0,
    },
    {
      title: "Deep Tissue Treatment",
      price: 70.0,
    },
    {
      title: "Hot Stone Massage",
      price: 85.0,
    },
    {
      title: "Thai Head Massage",
      price: 70.0,
    },
    {
      title: "Guasha Facial Massage",
      price: 70.0,
    },
    {
      title: "Hot Oil Massage",
      price: 60.0,
    },
    {
      title: "Shoulder Massage",
      price: 70.0,
    },
    {
      title: "Dry Cupping Therapy",
      price: 85.0,
    },
  ]

  // Define environment-based time slots
  const timeSlots: Record<string, string> = {
    Monday: process.env.NEXT_PUBLIC_MONDAY_HOURS || "11:00-19:00",
    Tuesday: process.env.NEXT_PUBLIC_TUESDAY_HOURS || "11:00-19:00",
    Wednesday: process.env.NEXT_PUBLIC_WEDNESDAY_HOURS || "11:00-19:00",
    Thursday: process.env.NEXT_PUBLIC_THURSDAY_HOURS || "11:00-19:00",
    Friday: process.env.NEXT_PUBLIC_FRIDAY_HOURS || "11:00-19:00",
    Saturday: process.env.NEXT_PUBLIC_SATURDAY_HOURS || "11:00-18:00",
    Sunday: process.env.NEXT_PUBLIC_SUNDAY_HOURS || "Closed",
  }

  useEffect(() => {
    // Update available time slots dynamically based on the selected date
    const dayOfWeek = dayjs(selectedDate).format("dddd")
    const hours = timeSlots[dayOfWeek]
    if (hours && hours !== "Closed") {
      const [start, end] = hours.split("-")
      const startHour = Number.parseInt(start.split(":")[0], 10)
      const endHour = Number.parseInt(end.split(":")[0], 10)

      const times = []
      for (let hour = startHour; hour < endHour; hour++) {
        times.push(`${hour}:00`)
        times.push(`${hour}:30`)
      }
      setAvailableTimeSlots(times)
    } else {
      setAvailableTimeSlots([])
    }
  }, [selectedDate])

  // Validation functions
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const cleanedNumber = phoneNumber.replace(/[\s()-]/g, "")
    const irishPhoneRegex =
      /^(?:\+353|00353|0)?(83|85|86|87|89|90|91|92|93|94|95|96|97|98|99|21|22|23|24|25|26|27|28|29|41|42|43|44|45|46|47|49|50|51|52|53|54|55|56|57|58|59|61|62|63|64|65|66|67|68|69|71|74|91|93|94|95|97|98|99)\d{6,7}$/
    return irishPhoneRegex.test(cleanedNumber)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("service", selectedService)
    formData.append("date", selectedDate)
    formData.append("time", selectedTime)

    const result = await sendEmail(formData)

    if (result.success) {
      setSubmitMessage("Booking request sent! We will contact you shortly.")
    } else {
      setSubmitMessage("There was an error sending the booking request. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="booking" className="bg-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-auto min-h-[500px] px-4 sm:px-6 md:px-10">
        <div className="md:col-span-1 bg-blue-500 p-4 text-white relative drop-shadow-lg h-64 md:h-auto">
          <Image src="/book.jpg" fill alt="Appointment" className="object-cover drop-shadow-lg" />
        </div>
        <div className="md:col-span-2 p-4 md:p-6 lg:p-8 h-full drop-shadow-lg">
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium font-raleway leading-tight sm:leading-10 tracking-wider text-black mb-4 sm:mb-6 text-center text-shadow-custom">
            Make an appointment now
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Select Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Select service</label>
                <select
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value)
                    e.target.classList.remove("opacity-50")
                  }}
                  className="w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 opacity-50 text-base"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title} (${service.price})
                    </option>
                  ))}
                </select>
              </div>
              {/* Name */}
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 text-base"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Date</label>
                <input
                  type="date"
                  min={dayjs().format("YYYY-MM-DD")}
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(dayjs(e.target.value).format("YYYY-MM-DD"))
                    e.target.classList.remove("opacity-50")
                  }}
                  className={`w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 ${selectedDate ? "" : "opacity-50"} text-base`}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => {
                    setSelectedTime(e.target.value)
                    e.target.classList.remove("opacity-50")
                  }}
                  className={`w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 ${selectedTime ? "" : "opacity-50"} text-base`}
                  required
                >
                  <option value="">Select a time</option>
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))
                  ) : (
                    <option value="closed">Not Available</option>
                  )}
                </select>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 text-base"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => {
                    if (!validateEmail(e.target.value)) {
                      alert("Invalid email format")
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-normal leading-6 font-poppins">Phone number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-lightgrey border border-gray-300 rounded-l-sm text-base">
                    +353
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full p-3 sm:p-3 bg-lightgrey border border-gray-300 rounded-r-sm focus:ring-2 focus:ring-blue-400 text-base"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) => {
                      if (!validatePhoneNumber(e.target.value)) {
                        alert("Invalid phone number format")
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div></div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-600 font-poppins text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 w-full text-base sm:text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book now"}
                </button>
              </div>
            </div>
            {submitMessage && <div className="mt-4 text-center text-green-600">{submitMessage}</div>}
          </form>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .grid-cols-1 > div:first-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}

export default Booking

