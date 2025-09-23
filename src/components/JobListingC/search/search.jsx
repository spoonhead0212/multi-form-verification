'use client'
import { useState, useEffect } from "react"
import { availableJobs } from "@/AllSlices/jobsSlice/jobData/jobData";
import style from './search.module.css'
import { motion } from 'motion/react'

function SearchFilter( {dispatch} ) {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState()

    // Real code
    const availableLanguages = availableJobs.flatMap((aj => aj.languages))
    const filteredLanguages = [...new Set(availableLanguages)].map(x => x.toLowerCase())

    const searchHandler = (e) => {
        e.preventDefault()
        if (search.trim() && filteredLanguages.includes(search.toLowerCase()) && !searchResults.includes(search)) {
            setSearchResults(prev => [
                ...prev, search
            ])
            setError()
        } else if (search.trim() && searchResults.includes(search)) {
            return setError('Search already exists')
        } else {
            setError('Search not available')
        }
        setSearch('')
    }

    useEffect(() => {
        dispatch({ type: 'SEARCH', payload: searchResults });
    }, [searchResults])

    const deleteHandler = (index) => {
        const deleteMe = searchResults.filter((_, i) => i !== index)
        setSearchResults(deleteMe)
    }   

    const clearSearch = () => {
        setSearchResults([])
    }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        className={style.filterWrapper}>
            <form action="" onSubmit={searchHandler}>
                <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search for jobs"
                />
                <button 
                className={style.searchBtn}>Search</button>
            </form>
            {error && <p className={style.error}>{error}</p>}
            {searchResults.length > 0 && 
                <div 
                className={style.searchResults}>
                    <ul 
                    className={style.searchList}>
                        {searchResults.map((result, index) => (
                            <li
                            className={style.searchItem}
                            key={index}>{result}
                            <button
                            className={style.deleteBtn}
                            type="button"
                             onClick={() => deleteHandler(index)}>x</button>
                            </li>
                        ))}
                    </ul>
                    <button
                    className={style.clearBtn}
                     onClick={clearSearch}>clear</button>
                </div>
            }
        </motion.div>
    )
}

export default SearchFilter
