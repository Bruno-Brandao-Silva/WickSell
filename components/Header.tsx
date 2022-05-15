import AccountInfo from './AccountInfo'
import styles from '../styles/Header.module.css'
export default function Header(props: any) {
    if (props.type === 'Default' || props.type === undefined) {
        return (<>
            <header className={styles.Header}>
                <div className={styles.UpperSideHeader}>
                    <a className={styles.LogoA} href="/"><img className={styles.LogoIcon} src="/logo.png" alt="Logo"></img></a>
                    <form action='/api/' className={styles.SearchContainer}>
                        <input type="text" placeholder="Pesquisa" className={styles.SearchInput}></input>
                        <button type='submit' className={styles.SearchBtn}><img className={styles.SearchIcon} src='/lupa-icon.svg' alt="Search Icon"></img></button>
                    </form>
                    <AccountInfo />
                </div>
                <div className={styles.NavBar}>
                    <div className={styles.NavBarTr}>
                        <div className={styles.NavBarUl}>Item 1</div>
                        <div className={styles.NavBarUl}>Item 2</div>
                        <div className={styles.NavBarUl}>Item 3</div>
                        <div className={styles.NavBarUl}>Item 4</div>
                        <div className={styles.NavBarUl}>Item 5</div>
                    </div>
                </div>
            </header>
        </>)

    }
    if (props.type === 'Perfil') {
        return (<>
            <header className={styles.Header}>
                <div className={styles.UpperSideHeader}>
                    <a className={styles.LogoA} href=""><img className={styles.LogoIcon} src="/logo.png" alt="Logo"></img></a>
                    <form action='/api/' className={styles.SearchContainer}>
                        <input type="text" placeholder="Pesquisa" className={styles.SearchInput}></input>
                        <button type='submit' className={styles.SearchBtn}><img className={styles.SearchIcon} src='/lupa-icon.svg' alt="Search Icon"></img></button>
                    </form>
                    <AccountInfo />
                </div>
            </header>
        </>)
    }
    return <></>
}