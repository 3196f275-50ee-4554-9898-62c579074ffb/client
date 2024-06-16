import cls from './StatisticsPie.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, transformData, WeightEnum } from '@shared/lib';
import { Pie, PieConfig } from '@ant-design/plots';

export const StatisticsPie = () => {
    const data = [
        { count: 13, type: 'Warning' },
        { count: 11, type: 'Success' },
        { count: 11, type: 'Danger' },
        { count: 11, type: 'Warning' },
        { count: 10, type: 'Success' },
        { count: 10, type: 'Danger' },
        { count: 9, type: 'Warning' },
        { count: 10, type: 'Success' },
        { count: 10, type: 'Danger' },
        { count: 8, type: 'Warning' },
        { count: 0, type: 'Success' },
        { count: 0, type: 'Danger' },
        { count: 0, type: 'Warning' },
        { count: 0, type: 'Success' },
        { count: 0, type: 'Danger' },
        { count: 70, type: 'Warning' },
        { count: 1, type: 'Success' },
        { count: 15, type: 'Danger' },
        { count: 0, type: 'Warning' },
        { count: 0, type: 'Success' },
        { count: 0, type: 'Danger' },
    ];

    const transformedData = transformData(data);

    const config: PieConfig = {
        data: transformedData,
        angleField: 'count',
        colorField: 'type',
    };

    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H1}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}
            >
                Общее кол-во нарушений
            </Text.Paragraph>
            <Pie {...config} />
        </div>
    );
};
