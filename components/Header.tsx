import AccountInfo from './AccountInfo'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [searchText, setSearchText] = useState('')
    return (<>
        <header className={styles.Header}>
            <div className={styles.UpperSideHeader}>
                <Link href="/"><a className={styles.LogoA} ><img className={styles.LogoIcon} src="/logo.png" alt="Logo"></img></a></Link>
                <form action='/search' method='get' className={styles.SearchContainer}>
                    <input type="text" name='name' placeholder="Buscar" value={searchText} onChange={e => {
                        setSearchText(e.target.value);
                    }} className={styles.SearchInput} required></input>
                    <input type="text" name='description' value={searchText} onChange={e => {
                        setSearchText(e.target.value);
                    }} style={{ display: 'none' }}></input>
                    <button type='submit' className={styles.SearchBtn}><img className={styles.SearchIcon} src='/lupa-icon.svg' alt="Search Icon"></img></button>
                </form>
                <AccountInfo />
            </div>
            <div className={styles.NavBar}>
                <div className={styles.NavBarTr}>
                    <Link href="/perfil/estoque"><a className={styles.NavBarUl}>Meus Produtos</a></Link>
                    <Link href="/produto/"><a className={styles.NavBarUl}>Cadastrar Produto</a></Link>
                    <Link href="/perfil/compras/"><a className={styles.NavBarUl}>Histórico de Compras</a></Link>
                    <Link href="/search/"><a className={styles.NavBarUl}>Busca avançada</a></Link>
                    <Link href="/sobre"><a className={styles.NavBarUl}>Sobre</a></Link>
                </div>
            </div>
        </header>
    </>)
}