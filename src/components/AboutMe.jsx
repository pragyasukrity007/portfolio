import { motion } from "framer-motion";
import profileImage from '../images/profile.jpeg'
import { aboutMeData } from "../data/aboutMeData";

const AboutMe = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          About Me
        </p>
      </div>
      <div className="center col-lg-10 col-md-10 col-12 px-0">
        <div className="m-4 p-3 bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
          <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
              <img src={profileImage} className="rounded-lg " alt="" />
            </div>

            <div className="font-general-regular w-full sm:w-3/4">
              {aboutMeData.map((bio) => (
                <p
                  className=" font-general-semibold text-justify mx-20 mb-4 text-primary-dark dark:text-ternary-light text-lg "
                  key={bio.id}
                >
                  {bio.bio}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
