import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <p className="mt-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </p>
      </div>
      <div className="m-4 p-3 bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
        <div className="block mt-5 sm:mt-10">
          <p className="mx-20 mb-2  font-general-semibold text-lg  text-justify sm:text-left text-ternary-dark dark:text-primary-light">
            LTIMindtree
          </p>
          <p className="mx-20 mb-2 font-general-medium text-lg text-justify sm:text-left leading-normal text-gray-500 dark:text-gray-200">
            Software Engineer | June 2021 - Present
          </p>
        </div>
        <div className="block mt-2 sm:mt-10">
          <div className="font-general-regular">
            {experienceData.map((bio, i) => (
              <li
                className="font-general-semibold text-justify mx-20 mb-2 text-primary-dark dark:text-ternary-light text-lg"
                key={bio.id}
              >
                {bio}
              </li>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
