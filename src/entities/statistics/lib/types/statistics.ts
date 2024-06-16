export enum StatisticsTypeEnum {
    WORKER = 'worker',
    OBJECT = 'object',
    ALL = 'all'
}

export interface IStatistics {
    id: string;
    user_id: string;
    header: string;
    body: string;
    created_at: Date;
}

export interface IChartStatistics {
    count: string;
    created_at: Date;
    header: string;
}