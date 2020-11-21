import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
