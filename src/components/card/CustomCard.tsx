import { Card } from 'antd';
import CustomDropDown from '../dropdown/CustomDropDown';
import { ICustomCardProps } from './CustomCard.interface';

const CustomCard = ({ title, description, count }: ICustomCardProps) => {
    return (
        <Card title={title} extra={<CustomDropDown />} className='w-300'>
            <p>{description}</p>
            <h1>{count}</h1>
        </Card>
    )
}

export default CustomCard