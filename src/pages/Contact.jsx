import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "Kolkata, India",
      icon: <FiMapPin />,
    },
    {
      id: 2,
      name: "pragyasukrity2712@gmail.com",
      icon: <FiMail />,
    },
    {
      id: 3,
      name: "+916380061842",
      icon: <FiPhone />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="container mx-auto"
    >
      <div>
        <div className="text-center">
          <p className="mt-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Contact Details
          </p>

          <div className="m-4 p-3 bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
            <div className="block mt-5 sm:mt-10">
              <div className="block mt-2 sm:mt-10">
                <ul className="font-general-regular">
                  {contacts.map((contact) => (
                    <li className="flex " key={contact.id}>
                      <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                        {contact.icon}
                      </i>
                      <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                        {contact.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
