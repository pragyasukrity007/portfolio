import { motion } from "framer-motion";
import { skillsData, industrySkill } from "../data/skillsData";

const Myskills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <p className="mt-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Skills
          </p>
        </div>

        <div className="text-center">
          <p className="mt-10 font-general-semibold text-xl mb-1 text-ternary-dark dark:text-ternary-light">
            Technology
          </p>
        </div>

        <div className="py-10">
          <div
            id="main"
            className="grid grid-flow-row px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {skillsData.map((skill) => (
              <div className="m-2 p-2 block bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
                <p
                  className="font-general-semibold text-center text-primary-dark dark:text-ternary-light text-lg "
                  key={skill.id}
                >
                  {skill.skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mt-10 font-general-semibold text-xl mb-1 text-ternary-dark dark:text-ternary-light">
           Industry
          </p>
        </div>

        <div className="py-10">
          <div
            id="main"
            className="grid grid-flow-row px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {industrySkill.map((skill) => (
              <div className="m-2 p-2 block bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
                <p
                  className="font-general-semibold text-center text-primary-dark dark:text-ternary-light text-lg "
                  key={skill.id}
                >
                  {skill.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Myskills;
