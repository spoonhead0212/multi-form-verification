'use client'
import Image from "next/image";
import style from './filteredJobs.module.css'
import { motion } from "motion/react";
// import { useState } from "react";

function FilteredJobs( {jobs} ) {

    const credentials = jobs.map(job => {
        return [job.role, job.level, ...job.languages]
    })

    return(
        <div 
        className={`${style.filteredJobsWrapper} ${style.flexColumn}`}>
            {jobs.map((data, i) => (
                <div key={data.id}
                className={`${data.new ? style.new : ''} ${style.jobDetailsWrapper} ${style.flexRow}`}
                >
                    <div className={style.jobDetails}>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className={style.imageBox}>
                            <Image
                             whileTap={{ scale: 0.9 }}
                                src={data.logo}
                                alt={data.id}
                                width={50}
                                height={50}
                            />
                        </motion.div>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: .5}}
                        className={`${style.jobDetailsText} ${style.flexColumn}`}>
                            <ul 
                            className={`${style.jobDetailsListing}`}>
                                <li>{data.company}</li>
                                {data.new && <li className={style.newest}>NEW!</li>}
                                {data.featured && <li className={style.feature}>FEATURED</li>}
                            </ul>
                            <h4>{data.position}</h4>
                            <ul 
                            className={`${style.flexRow} ${style.jobDetailsList}`}>
                                <li>{data.postedAt}</li>
                                <li>{data.contract}</li>
                                <li>{data.location}</li>
                            </ul>
                        </motion.div>
                    </div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1}}
                    >
                        <ul className={`${style.flexRow} ${style.tools}`}>
                            {credentials[i].map((cred, index) => (
                                <li key={index}>{cred}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default FilteredJobs