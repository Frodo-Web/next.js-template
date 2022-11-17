import styles from '@styles/Header.module.scss';

const Header = () => {
    const x = 5;
    return (
        <div>
            <h1 className={`title ${styles.headerTitle}`}>
                Page Header
            </h1>
            <style jsx>
                {`
                .title {
                    color: ${x > 3 ? 'blueviolet' : 'blue'};
                }
                `}
            </style>
        </div>
    )
}

export default Header;