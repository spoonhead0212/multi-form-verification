import Link from 'next/link'

function Root() {
    return(
        <div className='homeStyle'>
            <Link href='/mortgage-app'>Mortgage App Page</Link>
            <Link href='/multi-step-form'>Multi Step Form</Link>
            <Link href='/job-listing'>Job listings with filtering</Link>
        </div>
    )
}

export default Root