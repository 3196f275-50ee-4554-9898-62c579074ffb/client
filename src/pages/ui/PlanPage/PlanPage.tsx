import cls from './PlanPage.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const PlanPage = () => {
    const { pathname } = useLocation();
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        const pathId = parseInt(pathname.slice(pathname.lastIndexOf('/') + 1));
        if (!isNaN(pathId) && pathId >= 1 && pathId <= 9) {
            setId(pathId);
        } else {
            setId(null); // Handle invalid IDs
        }
    }, [pathname]);

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
            <div className={cls.info}>
                <div className={cls.img}>
                    <img
                        src={`${import.meta.env.VITE_SERVER_URL}/video/imagesmock?image=${id}.png`}
                        alt=""
                    />
                    <div className={cls.list}>
                        <Text.Link to={id && id > 1 ? `/works/planing/${id - 1}` : '#'}>
                            Предыдущая
                        </Text.Link>
                        <Text.Link to={id && id < 9 ? `/works/planing/${id + 1}` : '#'}>
                            Следующая
                        </Text.Link>
                    </div>
                </div>
                <div className={cls.text}>

                    <Text.Paragraph
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.BOLD}
                        size={SizeEnum.H2}
                    >
                        Статус работ:
                    </Text.Paragraph>
                    <div>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Объект: А10
                            Наименование: Укладка фундамента
                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Наименование: Укладка фундамента
                        </Text.Paragraph>
                    </div>


                    <Text.Paragraph
                        color={ColorEnum.TEXT}
                        size={SizeEnum.H3}
                    >
                        Текущий статус: <Text.Link
                        size={SizeEnum.H3}
                        weight={WeightEnum.BOLD}
                        to={'12421412'}>В процессе</Text.Link>
                    </Text.Paragraph>


                    <div>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            - Планируемая дата завершения: 8 июля 2024
                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            - Ответственный: <Text.Link
                            size={SizeEnum.H3}
                            to={'14r3q'}>Иванов И. И.</Text.Link>
                        </Text.Paragraph>
                    </div>

                    <div>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Рабочие:
                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            ФИО: <Text.Link
                            size={SizeEnum.H3}
                            to={'12312'}>Петров П. П.</Text.Link>, <Text.Link
                            size={SizeEnum.H3}
                            to={'14r3q'}>Павлов П.
                            И.</Text.Link>, <Text.Link
                            size={SizeEnum.H3}
                            to={'14r3q'}>Пащук И. В.</Text.Link>
                        </Text.Paragraph>
                    </div>


                    <div>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            - Специализация: Каменщик

                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            - Выполняемые задачи:

                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Укладка кирпичей, проведение монтажных работ

                        </Text.Paragraph>
                    </div>


                    <Text.Paragraph
                        color={ColorEnum.TEXT}
                        size={SizeEnum.H3}
                    >
                        Предупреждения о погодных условиях:
                    </Text.Paragraph>

                    <div>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Вероятность дождя 0%
                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Погода: Солнечно, ясно
                        </Text.Paragraph>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                        >
                            Температура: 22 - 35 С
                        </Text.Paragraph>
                    </div>
                </div>
            </div>
            <div className={cls.transport}>
                <div className={cls.transportInfo}>
                    <Text.Paragraph
                        size={SizeEnum.H1}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.TEXT}
                    >
                        Транспорт:
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        Транспортное средство&nbsp;
                        <Text.Link
                            size={SizeEnum.H3}
                            weight={WeightEnum.MEDIUM}
                            to={'12'}>
                            Грузовик №1
                        </Text.Link>
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        Водитель:&nbsp;
                        <Text.Link
                            size={SizeEnum.H3}
                            weight={WeightEnum.MEDIUM}
                            to={'12'}>
                            Иванов А. Д.
                        </Text.Link>
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        &nbsp;- Планируемые время и дата приезда: 8:00 6 июля 2024
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        &nbsp;- Планируемый маршрут: Со склада до строительной площадки
                    </Text.Paragraph>
                </div>
                <div className={cls.state}>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        Состояние транспорта: Хорошее
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                    >
                        Статус работы:&nbsp;
                        <Text.Link
                            weight={WeightEnum.BOLD}
                            to={'dasdas'}
                            size={SizeEnum.H3}
                            color={ColorEnum.SUCCESS}
                        >
                            Выполнено
                        </Text.Link>
                    </Text.Paragraph>
                </div>
            </div>
        </div>
    );
};

