import Link from 'next/link'

function Root() {
    return(
        <div className='homeStyle'>
            <Link href='/mortgage-app'>Mortgage App Page</Link>
            <Link href='/multi-step-form'>Multi Step Form</Link>
            <Link href='/job-listing'>Job listings with filtering</Link>
            <Link href='/space-tourism'>Space tourism</Link>
            <Link href='/product-list'>Product list</Link>
        </div>
    )
}

export default Root