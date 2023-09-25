import { motion } from "framer-motion";

const Activities = () => {
  const data = [
    `Received SPOTON AWARDS for Expert Thinking, in appreciation of my efforts which led to great customer satisfaction. `,
    `Received SPOTON AWARDS for A-Team, displaying exemplary team spirit, taking initiative & delivering high values to customer. `,
    `Received GRACIAS AWARDS for being a Team Player. `,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <p className="mt-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Activities and Honors
        </p>
      </div>
      <div className="m-4 p-3 bg-primaryCard-light dark:bg-secondary-dark shadow-xl rounded-xl">
        <div className="block mt-2 sm:mt-10">
          <div className="font-general-regular">
            {data.map((bio, i) => (
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

export default Activities;
