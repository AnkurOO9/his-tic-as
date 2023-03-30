import { Button, Input } from 'antd';
import ProgramTiers from '../program-tiers/ProgramTiers';
import { ILoyaltyProgramProps } from './LoyaltyPrograms.interface';
import styles from './LoyaltyPrograms.module.scss';

const LoyaltyPrograms = ({ selectedMember, isAdd, isEdit, handleOnChnage, handleOnSubmit }: ILoyaltyProgramProps) => {
    return (
        <div className={styles.programs}>
            <h1>Loyalty Programs</h1>
            <div className={styles.formContainer}>
                <div>
                    <label className={styles.label}>Name : </label>
                    <Input placeholder="Name" name="name" value={selectedMember.name}
                        onChange={(e) => { handleOnChnage(e.target) }}
                        disabled={!isEdit && !isAdd} />
                </div>
                <div>
                    <label className={styles.label}>Description : </label>
                    <Input.TextArea rows={4} name="description" placeholder="Description" value={selectedMember.description}
                        onChange={(e) => { handleOnChnage(e.target) }}
                        disabled={!isEdit && !isAdd} />
                </div>
                <div className={styles.submitBtn}>
                    <Button type="primary" disabled={!isEdit && !isAdd} onClick={handleOnSubmit}>Submit</Button>
                </div>
            </div>
            <div>
                <ProgramTiers title="Program tiers" memberId={selectedMember.id} />
            </div>
        </div>
    )
}

export default LoyaltyPrograms