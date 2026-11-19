import globe from '../assets/globe.svg';
export default function Header() {
    return (
        <header>
            <nav>
                <img src={globe} alt="header-logo" />
                <span>my travel journal</span>
            </nav>
        </header>
    )
}