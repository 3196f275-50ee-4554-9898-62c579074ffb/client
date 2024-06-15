import cls from './ReportsPage.module.scss';
import { useMemo, useState } from 'react';
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { useTheme } from '@app/providers';
import { customStyles, Select, Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useGetObjects } from '@entities/object';
import { useGetReports } from '@entities/report';

type Object = {
    title: string;
    employee: string;
    location: string;
    status: string;
    created_at: string;
};

export const ReportsPage = () => {
    const { theme } = useTheme();
    const [selectedObject, setSelectedObject] = useState(null);
    const options = useGetObjects();
    const { trigger, data: reportsData } = useGetReports();
    const handleSelectChange = (selectedOption) => {
        if (selectedOption.id) {
            trigger(selectedOption.id);
            setSelectedObject(selectedOption.value);
        }
    };


    const columns = useMemo<MRT_ColumnDef<Object>[]>(
        () => [
            {
                accessorKey: 'title',
                header: 'Название',
            },
            {
                accessorKey: 'employee',
                header: 'Рабочий',
            },
            {
                accessorKey: 'location',
                header: 'Участок',
            },
            {
                accessorKey: 'created_at',
                header: 'Дата',
            },
            {
                accessorKey: 'status',
                header: 'Статус',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data: reportsData || [], // Используем данные отчетов для таблицы
        rowCount: reportsData?.length || 0,
    });
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
                Отчеты
            </Text.Heading>
            <Select
                styles={customStyles}
                options={options}
                onChange={handleSelectChange}
                placeholder="Выберите объект"
            />
            <MantineProvider
                theme={{
                    colorScheme: theme, // режим цветовой схемы (light или dark), замените на нужное значение
                }}
            >
                {selectedObject
                    &&
                    <MantineReactTable table={table} />
                }
            </MantineProvider>
        </div>
    );
};

