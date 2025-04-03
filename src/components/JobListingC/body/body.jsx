'use client';
import { useReducer } from "react";
import { availableJobs } from "@/AllSlices/jobsSlice/jobData/jobData";
import style from './body.module.css';
import SearchFilter from "../search/search";
import FilteredJobs from "../filteredJobs/filteredJobs";

function Body() {

    const initialState = {
        jobs: availableJobs
    };

    // console.log(availableJobs);

    // const credentials = availableJobs.flatMap(job => {
    //     return [job.role, job.level, ...job.languages]
    // })

    // const filteredLanguages = [...new Set(credentials)].map(x => x.toLowerCase())
    // console.log(filteredLanguages);

    // console.log(credentials);
    
    
    
    function reducer(state, action) {
        switch (action.type) {
            case 'SEARCH':
                return {
                    ...state,
                    jobs: action.payload.length === 0 ? availableJobs :
                    // loop through all the data
                    availableJobs.filter((dt) => {
                        // loop through the search results
                        return action.payload.some(term => 
                            // check if the term is in the data
                            dt.role.toLowerCase().includes(term.toLowerCase()) ||
                            dt.level.toLowerCase().includes(term.toLowerCase()) ||
                            dt.languages.some(lang => lang.toLowerCase().includes(term.toLowerCase()))
                        )
                    })
                }
            default:
                return state
        }
    }

    

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className={style.body}>
            <div className={style.top}></div>
            <div className={style.bottom}>
                <div className={style.filteredJobs}>
                    <SearchFilter dispatch={dispatch}/>
                    <div className={style.jobBox}>
                        <FilteredJobs jobs={state.jobs}/>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}

export default Body
