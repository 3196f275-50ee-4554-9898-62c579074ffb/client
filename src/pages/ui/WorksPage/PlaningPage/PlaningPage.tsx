import cls from './PlaningPage.module.scss';
import { customStyles, Select, Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { useState } from 'react';
import { useGetObjects } from '@entities/object';

const ganttStylingOptions = {
    fontFamily: 'var(--fontFamilyFirst)',
    fontSize: 'var(--paragraph-size-3)',
    barBackgroundColor: 'var(--bg-invert)',
};

const tasks: Task[] = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Idea',
        id: 'Task 0',
        type: 'task',
        progress: 45,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
        start: new Date(2020, 1, 3),
        end: new Date(2020, 1, 5),
        name: 'Idea 2',
        id: 'Task 1',
        type: 'task',
        progress: 20,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        dependencies: ['Task 0'],
    },
    {
        start: new Date(2020, 1, 6),
        end: new Date(2020, 1, 8),
        name: 'Design Phase',
        id: 'Task 2',
        type: 'task',
        progress: 50,
        isDisabled: false,
        styles: { progressColor: '#6aa84f', progressSelectedColor: '#38761d' },
    },
    {
        start: new Date(2020, 1, 9),
        end: new Date(2020, 1, 11),
        name: 'Development',
        id: 'Task 3',
        type: 'task',
        progress: 30,
        isDisabled: false,
        styles: { progressColor: '#3c78d8', progressSelectedColor: '#1155cc' },
    },
    {
        start: new Date(2020, 1, 12),
        end: new Date(2020, 1, 14),
        name: 'Testing',
        id: 'Task 4',
        type: 'task',
        progress: 60,
        isDisabled: false,
        styles: { progressColor: '#e06666', progressSelectedColor: '#cc0000' },
    },
    {
        start: new Date(2020, 1, 15),
        end: new Date(2020, 1, 17),
        name: 'Deployment',
        id: 'Task 5',
        type: 'task',
        progress: 40,
        isDisabled: false,
        styles: { progressColor: '#ffd966', progressSelectedColor: '#e69138' },
    },
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 20),
        name: 'Maintenance',
        id: 'Task 6',
        type: 'task',
        progress: 20,
        isDisabled: true,
        styles: { progressColor: '#a4c2f4', progressSelectedColor: '#3c78d8' },
    },
    {
        start: new Date(2020, 1, 21),
        end: new Date(2020, 1, 23),
        name: 'User Training',
        id: 'Task 7',
        type: 'task',
        progress: 70,
        isDisabled: false,
        styles: { progressColor: '#d9ead3', progressSelectedColor: '#b6d7a8' },
    },
    {
        start: new Date(2020, 1, 24),
        end: new Date(2020, 1, 26),
        name: 'Review',
        id: 'Task 8',
        type: 'task',
        progress: 80,
        isDisabled: false,
        styles: { progressColor: '#f9cb9c', progressSelectedColor: '#e69138' },
    },
    {
        start: new Date(2020, 1, 27),
        end: new Date(2020, 1, 29),
        name: 'Final Approval',
        id: 'Task 9',
        type: 'task',
        progress: 90,
        isDisabled: false,
        styles: { progressColor: '#f6b26b', progressSelectedColor: '#e69138' },
    },
    {
        start: new Date(2020, 2, 1),
        end: new Date(2020, 2, 3),
        name: 'Documentation',
        id: 'Task 10',
        type: 'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#76a5af', progressSelectedColor: '#45818e' },
    },
    {
        start: new Date(2020, 2, 4),
        end: new Date(2020, 2, 6),
        name: 'Project Closeout',
        id: 'Task 11',
        type: 'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#8e7cc3', progressSelectedColor: '#674ea7' },
    },
    {
        start: new Date(2020, 2, 7),
        end: new Date(2020, 2, 9),
        name: 'Post-Mortem',
        id: 'Task 12',
        type: 'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#c27ba0', progressSelectedColor: '#a64d79' },
    },
];
export const PlaningPage = () => {
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
                    viewMode={ViewMode.Day}
                    locale="RUS"
                    listCellWidth={''}
                    preStepsCount={1}
                />
            )}
        </div>
    );
};
