import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "../lib/utils";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import companyLogo from "../assets/pinnacle.jpg";
import companyLogo1 from "../assets/cloud12.jpg";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Pinnacle labs",
    img: companyLogo1,
    location: "Remote",
    period: "Jul 2023-Sep 2023",
    responsibilities: [
      "Developed responsive websites for various clients using modern JavaScript frameworks",
      "Gained hands-on technical experience",
      "Built reusable components and libraries for future use",
      "Worked in an Agile environment with two-week sprints",
    ],
  },
  {
    title: "Web Developer Intern",
    img: companyLogo,
    company: "IAC",
    location: "Remote",
    period: "Mar 2024-Apr 2024",
    responsibilities: [
      "Worked on Full-Stack Development",
      "Improved website performance by 40% through code optimization and lazy loading",
      "Collaborated on team-based projects",
      "Collaborated with designers to create user-friendly interfaces",
    ],
  },
];

export default function Third() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className=" bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "relative mb-8 md:mb-0 md:clear-both md:w-1/2 md:px-8 transition-all duration-700 transform",
                index % 2 === 0
                  ? "md:float-left md:text-right md:pr-12"
                  : "md:float-right md:pl-12",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 -right-3 md:top-6 md:right-auto md:left-auto md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10">
                {index % 2 === 0 ? (
                  <div className="md:left-auto md:right-[-8px] absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-border"></div>
                ) : (
                  <div className="md:right-auto md:left-[-8px] absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-border"></div>
                )}
              </div>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3)",
                }}
                className=" bg-card p-6 rounded-lg border border-blue-600 hover:border-blue-600/50 transition-all shadow-sm hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="w-10 h-10 m-2">
                  <img src={exp.img} />
                </div>
                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

          {/* Clear float */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
}
