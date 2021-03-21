import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="h-20  bg-gradient-to-r from-yellow-500 to-red-500 text-white 
            flex justify-center items-center">
            <Link href="/">
                <a className="mx-8 text-lg font-light">Home</a>
            </Link>
            <Link href="/about">
                <a className="mx-8 text-lg font-light">Feed</a>
            </Link>
            <Link href="/eom">
                <a className="mx-8 text-lg font-light">EOM</a>
            </Link>
            <Link href="/">
                <a className="mx-8 text-lg font-light">Source</a>
            </Link>
        </nav>
    )
}

export default Navbar;
