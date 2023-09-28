import { motion } from "framer-motion";
import { certificationData } from "../data/certificationData";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <p className="mt-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Certifications
        </p>
      </div>
      <div className="m-4 p-3 bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
        <div className="block mt-2 sm:mt-10">
          <div className="font-general-regular">
            {certificationData.map((item) => (
              <div className="block mt-5 sm:mt-10">
                <p className="mx-20 font-general-semibold text-lg  text-justify sm:text-left text-ternary-dark dark:text-primary-light">
                  {item.course}
                </p>
                <p className="mx-20 text-justify mb-2 text-primary-dark dark:text-ternary-light text-lg">
                  {item.issueOrganization}, {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
