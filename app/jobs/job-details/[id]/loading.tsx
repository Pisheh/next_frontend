import styles from '@/app/styles/loader.module.css'

const Loading = () => {
  return (
    <div className='h-screen mt-[77px] flex justify-center items-center'>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default Loading
