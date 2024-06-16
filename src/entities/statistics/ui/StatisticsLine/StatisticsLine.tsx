import cls from './StatisticsLine.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Line, LineConfig } from '@ant-design/plots';

export const StatisticsLine = () => {
    const data = [];
    const config: LineConfig = {
        data: [

            {
                date: '2024-06-10',
                count: 13,
                header: 'Warning',
            },
            {
                date: '2024-06-10',
                count: 11,
                header: 'Success',
            },
            {
                date: '2024-06-10',
                count: 11,
                header: 'Danger',
            },
            {
                date: '2024-06-11',
                count: 11,
                header: 'Warning',
            },
            {
                date: '2024-06-11',
                count: 10,
                header: 'Success',
            },
            {
                date: '2024-06-11',
                count: 10,
                header: 'Danger',
            },
            {
                date: '2024-06-12',
                count: 9,
                header: 'Warning',
            },
            {
                date: '2024-06-12',
                count: 10,
                header: 'Success',
            },
            {
                date: '2024-06-12',
                count: 10,
                header: 'Danger',
            },
            {
                date: '2024-06-13',
                count: 8,
                header: 'Warning',
            },
            {
                date: '2024-06-13',
                count: 0,
                header: 'Success',
            },
            {
                date: '2024-06-13',
                count: 0,
                header: 'Danger',
            },
            {
                date: '2024-06-14',
                count: 0,
                header: 'Warning',
            },
            {
                date: '2024-06-14',
                count: 0,
                header: 'Success',
            },
            {
                date: '2024-06-14',
                count: 0,
                header: 'Danger',
            },
            {
                date: '2024-06-15',
                count: 70,
                header: 'Warning',
            },
            {
                date: '2024-06-15',
                count: 1,
                header: 'Success',
            },
            {
                date: '2024-06-15',
                count: 15,
                header: 'Danger',
            },
            {
                date: '2024-06-16',
                count: 0,
                header: 'Warning',
            },
            {
                date: '2024-06-16',
                count: 0,
                header: 'Success',
            },
            {
                date: '2024-06-16',
                count: 0,
                header: 'Danger',
            },
        ],
        xField: 'date',
        yField: 'count',
        legend: { size: false },
        colorField: 'header',

    };
    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H1}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}

            >
                Нарушения за месяц
            </Text.Paragraph>
            {/*@ts-ignore*/}
            <Line {...config} />
        </div>
    );
};

