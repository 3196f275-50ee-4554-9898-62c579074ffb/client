import cls from './StatisticsLine.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const StatisticsLine = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json',
            transform: [
                {
                    type: 'map',
                    callback: (d) => ({
                        ...d,
                        close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
                    }),
                },
            ],
        },
        xField: 'year',
        yField: 'value',
        point: {
            shapeField: 'square',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        },
        style: {
            lineWidth: 2,
        },
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
        </div>
    );
};

