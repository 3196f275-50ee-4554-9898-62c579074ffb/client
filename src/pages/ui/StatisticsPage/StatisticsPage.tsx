import cls from './StatisticsPage.module.scss';
import { Button, customStyles, Select, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, useAppDispatch, WeightEnum } from '@shared/lib';
import { useState } from 'react';
import { useGetUsers } from '@entities/user';
import { useGetObjects } from '@entities/object';
import {
    changeStatisticsType, setStatistics,
    StatisticsCanvas, StatisticsLine, StatisticsPie,
    StatisticsTypeEnum,
    StatisticsViolation, StatisticsWorkers,
    useGetAllStatistics, useGetByObjectIdStatistics, useGetByWorkerIdStatistics,
} from '@entities/statistics';

export const StatisticsPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const allData = useGetAllStatistics();
    const { objectTrigger, data: objectData } = useGetByObjectIdStatistics();
    const { workerTrigger, data: workerData } = useGetByWorkerIdStatistics();
    const dispatch = useAppDispatch();
    const options = [
        { label: 'По всем объектам', value: 'objects' },
        { label: 'По работнику', value: 'worker' },
        { label: 'По объекту', value: 'object' },
    ];

    const usersOptions = useGetUsers();
    const objectOptions = useGetObjects();

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption.value);
        setSelectedObject(null); // Reset object/user selection when main option changes
        setSelectedUser(null);
        dispatch(changeStatisticsType(StatisticsTypeEnum.ALL));
        dispatch(setStatistics(allData));
    };

    const handleUsersChange = (selectedOption) => {
        setSelectedUser(selectedOption.value);
        setSelectedObject(null); // Reset object/user selection when main option changes
        dispatch(changeStatisticsType(StatisticsTypeEnum.WORKER));
        workerTrigger(selectedOption.value);
    };

    const handleObjectsChange = (selectedOption) => {
        setSelectedObject(selectedOption.value);
        setSelectedUser(null);
        dispatch(changeStatisticsType(StatisticsTypeEnum.OBJECT));
        objectTrigger(selectedOption.id);
    };

    return (
        <div className={cls.wrapper}>
            <Text.Heading
                color={ColorEnum.TEXT}
                size={SizeEnum.H3}
                weight={WeightEnum.MEDIUM}
            >
                Статистика
            </Text.Heading>
            <div className={cls.tools}>
                <div className={cls.select}>
                    <Select
                        styles={customStyles}
                        options={options}
                        onChange={handleSelectChange}
                        placeholder="Выберите объект"
                    />
                </div>
                {selectedOption && (
                    <div className={cls.select}>
                        {selectedOption === 'worker' ? (
                            <Select
                                styles={customStyles}
                                options={usersOptions}
                                onChange={handleUsersChange}
                                placeholder="Выберите работника"
                            />
                        ) : selectedOption === 'object' ? (
                            <Select
                                styles={customStyles}
                                options={objectOptions}
                                onChange={handleObjectsChange}
                                placeholder="Выберите объект"
                            />
                        ) : null}
                    </div>
                )}
            </div>
            <div className={cls.body}>
                <StatisticsLine />
                <StatisticsViolation />
                <StatisticsPie />
                <StatisticsWorkers />
            </div>
        </div>
    );
};
