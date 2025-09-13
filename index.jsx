import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <Card className="rounded-2xl shadow-xl overflow-hidden">
          <CardContent className="p-6 md:p-10 text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/Jean_de_la_croix.jpg"
                alt="Jean de la croix ISHIMIRWE"
                width={160}
                height={160}
                className="rounded-full border-4 border-white shadow-md"
              />
              <h1 className="text-3xl font-bold mt-4">Jean de la croix ISHIMIRWE</h1>
              <p className="text-gray-600 mt-2 text-lg">
                Student at Adventist University of Central Africa
              </p>
              <p className="text-gray-700 font-medium mt-1">
                Networks and Communication Systems
              </p>

              <div className="flex space-x-4 mt-6">
                <a href="mailto:ishimirwejean21@gmail.com">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Mail size={18} /> <span>Email</span>
                  </Button>
                </a>
                <a href="tel:+250786007413">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Phone size={18} /> <span>Call</span>
                  </Button>
                </a>
                <a href="https://github.com/ISHIMIRWEJ" target="_blank">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Github size={18} /> <span>GitHub</span>
                  </Button>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-10 text-left w-full"
              >
                <h2 className="text-2xl font-semibold mb-3">About Me</h2>
                <p className="text-gray-700 leading-relaxed">
                  I am passionate about networking and communication systems, aiming to design
                  and implement efficient, secure, and scalable network infrastructures. My goal
                  is to contribute to technological advancements and provide innovative solutions
                  that empower communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 text-left w-full"
              >
                <h2 className="text-2xl font-semibold mb-3">Skills</h2>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li>Network Configuration</li>
                  <li>Linux/Unix Systems</li>
                  <li>Routing & Switching</li>
                  <li>Cybersecurity Basics</li>
                  <li>DNS & Web Servers</li>
                  <li>Virtualization</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 text-left w-full"
              >
                <h2 className="text-2xl font-semibold mb-3">Projects</h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Network-Attached Storage (NAS) Deployment</li>
                  <li>Suricata IDS for Security Monitoring</li>
                  <li>Web Hosting with Apache2 & Nginx</li>
                  <li>Secure SSH with 2FA & Firewall Rules</li>
                  <li>Dynamic Portfolio with Docker & Traefik</li>
                </ul>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
