import cls from './StatisticsCanvas.module.scss';
import { StatisticsWorkers } from '@entities/statistics';

export const StatisticsCanvas = () => {
    return (
        <div className={cls.workers}>
            <StatisticsWorkers />
        </div>
    );
};

