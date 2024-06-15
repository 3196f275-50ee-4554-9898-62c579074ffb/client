import cls from './PlaningPage.module.scss';
import { customStyles, Select, Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { useState } from 'react';
import { useGetObjects } from '@entities/object';
import { useNavigate } from 'react-router-dom';

const ganttStylingOptions = {
    fontFamily: 'var(--fontFamilyFirst)',
    fontSize: 'var(--paragraph-size-3)',
    barBackgroundColor: 'var(--bg-invert)',
};

const tasks: Task[] = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: '1 этаж',
        id: '1',
        type: 'task',
        progress: 80,
        isDisabled: false,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
        start: new Date(2020, 1, 3),
        end: new Date(2020, 1, 5),
        name: '2 этаж',
        id: '2',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        dependencies: ['1'],
    },
    {
        start: new Date(2020, 1, 6),
        end: new Date(2020, 1, 8),
        name: '3 этаж',
        id: '3',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#6aa84f', progressSelectedColor: '#38761d' },
        dependencies: ['2'],

    },
    {
        start: new Date(2020, 1, 9),
        end: new Date(2020, 1, 11),
        name: '4 этаж',
        id: '4',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#3c78d8', progressSelectedColor: '#1155cc' },
        dependencies: ['3'],

    },
    {
        start: new Date(2020, 1, 12),
        end: new Date(2020, 1, 14),
        name: '5 этаж',
        id: '5',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#e06666', progressSelectedColor: '#cc0000' },
        dependencies: ['4'],
    },
    {
        start: new Date(2020, 1, 15),
        end: new Date(2020, 1, 17),
        name: '6 этаж',
        id: '6',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#ffd966', progressSelectedColor: '#e69138' },
        dependencies: ['5'],
    },
    {
        start: new Date(2020, 1, 18),
        end: new Date(2020, 1, 20),
        name: '7 этаж',
        id: '7',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#a4c2f4', progressSelectedColor: '#3c78d8' },
        dependencies: ['6'],
    },
    {
        start: new Date(2020, 1, 21),
        end: new Date(2020, 1, 23),
        name: '8 этаж',
        id: '8',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#d9ead3', progressSelectedColor: '#b6d7a8' },
        dependencies: ['7'],
    },
    {
        start: new Date(2020, 1, 24),
        end: new Date(2020, 1, 26),
        name: '9 этаж',
        id: '9',
        type: 'task',
        progress: 0,
        isDisabled: false,
        styles: { progressColor: '#f9cb9c', progressSelectedColor: '#e69138' },
        dependencies: ['8'],

    },
];
export const PlaningPage = () => {
    const navigate = useNavigate()
    const [selectedObject, setSelectedObject] = useState(null);
    const options = useGetObjects();
    const handleSelectChange = (selectedOption) => {
        setSelectedObject(selectedOption.value);
        console.log(selectedOption.value);
    };

    return (
        <div className={cls.wrapper}>
            <Text.Heading
                color={ColorEnum.TEXT}
                size={SizeEnum.H3}
                weight={WeightEnum.MEDIUM}
            >
                Работы
            </Text.Heading>
            <Text.Heading
                color={ColorEnum.TEXT}
                size={SizeEnum.H6}
                weight={WeightEnum.MEDIUM}
            >
                Планирование работ
            </Text.Heading>
            <Select
                styles={customStyles}
                options={options}
                onChange={handleSelectChange}
                placeholder="Выберите объект"
            />
            {selectedObject && (
                <Gantt
                    {...ganttStylingOptions}
                    tasks={tasks}
                    onClick={(task) => {
                        navigate(`/works/planing/${task.id}`);
                    }}
                    viewMode={ViewMode.Day}
                    locale="RUS"
                    listCellWidth={''}
                    preStepsCount={1}
                />
            )}
        </div>
    );
};
