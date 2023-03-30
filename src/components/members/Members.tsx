import CustomCard from '../card/CustomCard';
import styles from './Members.module.scss';
const Members = () => {

    const CommonCards = () => {
        return (
            <>
                <CustomCard title='Unmerged Members' description='Unmateched records in customer deduplication process' count={286.875} />
                <CustomCard title='Eliminated Members' description='Excluded records in customer deduplication process' count={136.817} />
            </>
        )
    }
    return (
        <div className={styles.membersContainer}>
            <div className={styles.membersSubContainer}>
                <CommonCards />
            </div>
            <div className={styles.membersSubContainer}>
                <CommonCards />
            </div>
        </div>
    )
}

export default Members