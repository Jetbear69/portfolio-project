import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "8%",
    },
    animate: {
        top: "188%",
    },
    exit: {
        top: ["188%", "0%"],
    },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs.
            Each div will have the same animation by the stairAnimation object.
            The delay for each div is calculated dinamically based on it's reserved index,
            creating a staggered effect with decreassion delay for each subsequent step. 
            */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ 
                            duration: 0.4, 
                            ease: "easeInOut", 
                            delay: reverseIndex(index) * 0.1 
                        }}
                        className="h-full w-full bg-gradient-to-t from-rose-700 to-orange-500 relative"
                    />
                )
            })}
        </>
    );
};

export default Stairs;