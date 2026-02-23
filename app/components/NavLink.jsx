import Link from "next/link";

const NavLink = ({ href, title}) => {
    return(
        <Link 
        href={href} 
        className="block py-2 pl-3 pr-4 text-[#3788ff] sm:text-xl rounded md:p-0 hover:text-white font-semibold dark:text-slate-200 dark:hover:text-slate-300"
        >
            {title}
        </Link>
    );
};

export default NavLink;