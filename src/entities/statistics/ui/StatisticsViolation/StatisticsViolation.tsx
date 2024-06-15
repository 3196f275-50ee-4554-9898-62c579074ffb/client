import { useEffect, useState } from 'react';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, useAppSelector, WeightEnum } from '@shared/lib';
import { VideoNotification } from '@entities/video';
import { selectedStatistics } from '@entities/statistics';
import cls from './StatisticsViolation.module.scss';

export const StatisticsViolation = () => {
    const statistics = useAppSelector(selectedStatistics);

    const [newViolations, setNewViolations] = useState([]);
    const [inProgressViolations, setInProgressViolations] = useState([]);
    const [resolvedViolations, setResolvedViolations] = useState([]);

    useEffect(() => {
        if (statistics) {
            setNewViolations(statistics.filter(item => item.header.includes('Danger')));
            setInProgressViolations(statistics.filter(item => item.header.includes('Warning')));
            setResolvedViolations(statistics.filter(item => item.header.includes('Success')));
        }
    }, [statistics]);

    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H1}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}
            >
                Нарушения
            </Text.Paragraph>
            <ul className={cls.allList}>
                <li className={classNames(cls.allListItem, {}, [cls.danger])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        {newViolations.length}
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        Новые
                    </Text.Paragraph>
                </li>
                <li className={classNames(cls.allListItem, {}, [cls.warning])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        {inProgressViolations.length}
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        В работе
                    </Text.Paragraph>
                </li>
                <li className={classNames(cls.allListItem, {}, [cls.success])}>
                    <Text.Heading
                        size={SizeEnum.H6}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.WHITE}
                    >
                        {resolvedViolations.length}
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H5}
                        weight={WeightEnum.MEDIUM}
                        color={ColorEnum.WHITE}
                    >
                        Устранено
                    </Text.Paragraph>
                </li>
            </ul>
            <ul className={cls.list}>
                {statistics && statistics.map((item, index) => {
                    if (index < 4) {
                        return (
                            <li className={cls.listItem} key={item.id}>
                                <VideoNotification
                                    header={item.header}
                                    body={item.body}
                                />
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};
