import About from "@/app/about/page"
import Notes from "@/app/notes/page"
import Profile from "@/app/profile/page"
import css from "./Header.module.css"
import Link from 'next/link';

const Header = () =>{
    return <header className={css.header}>
        <Link href='/'>NoteHub</Link>
        <nav>
            <ul className={css.navigation}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/notes'>Notes</Link></li>
                <li><Link href='/profile'>Profile</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
};

export default Header;