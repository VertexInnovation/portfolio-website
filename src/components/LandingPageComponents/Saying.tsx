import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "We got our first lead through bluelearn! Right after my pitch in the bluelearn pitch tank competition, I got my first lead. Thanks a lot for this crazy community you guys have built.",
    author: "Mehul Kapadia",
    role: "Startup Founder",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 2,
    content: "Bluelearn Quiz Club is the perfect place to nurture quizzing and improve your analytical skills. Helped me a lot to improve myself in quizzing and increased my urge to gather information.",
    author: "Faizan Najeeb",
    role: "Quiz Champion",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 3,
    content: "At bluelearn I learnt how to be consistent and how to interact with others. I also learnt everything related to freelancing.",
    author: "Purnima Borana",
    role: "Freelancer",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 4,
    content: "I met CTO for my startup in this community. He's still working with us. Couldn't ask for a better person. Network on the BL Community, if done right, you can find a motivated team there.",
    author: "Ayush Mittal",
    role: "Entrepreneur",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 5,
    content: "We got our first lead through bluelearn! Right after my pitch in the bluelearn pitch tank competition, I got my first lead. Thanks a lot for this crazy community you guys have built.",
    author: "Mehul Kapadia",
    role: "Startup Founder",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 6,
    content: "Bluelearn Quiz Club is the perfect place to nurture quizzing and improve your analytical skills. Helped me a lot to improve myself in quizzing and increased my urge to gather information.",
    author: "Faizan Najeeb",
    role: "Quiz Champion",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id: 7,
    content: "At bluelearn I learnt how to be consistent and how to interact with others. I also learnt everything related to freelancing.",
    author: "Purnima Borana",
    role: "Freelancer",
    avatarUrl: "/api/placeholder/100/100"
  },
  {
    id:8,
    content: "I met CTO for my startup in this community. He's still working with us. Couldn't ask for a better person. Network on the BL Community, if done right, you can find a motivated team there.",
    author: "Ayush Mittal",
    role: "Entrepreneur",
    avatarUrl: "/api/placeholder/100/100"
  }
];

const Saying = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Don't take our word for it
        </h2>
        <p className="mb-12 text-center text-gray-600">
          See what our community is saying
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-10" />
          
          <motion.div
            className="flex gap-6 py-8"
            animate={{
              x: [`0%`, `-${(currentIndex + 1) * 100}%`]
            }}
            transition={{
              duration: 22,
              ease: "linear"
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author}
                        className="object-cover w-12 h-12 rounded-full"
                    />
                    <div className="absolute p-1 bg-purple-500 rounded-full -bottom-2 -right-2">
                      <Quote className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute w-8 h-8 text-purple-100 -top-2 -left-2" />
                  <p className="relative z-10 pl-4 text-gray-700">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 border-2 border-white rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx 
                    ? 'bg-purple-500 w-4' 
                    : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saying;