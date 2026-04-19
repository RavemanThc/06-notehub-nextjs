import Link from "next/link";
import css from "/Footer.module.css";

const Footer = () =>{
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

export default Footer;