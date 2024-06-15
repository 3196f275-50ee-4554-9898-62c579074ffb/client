import { useLazyGetReportsByIdQuery } from '@entities/report';

export const useGetReports = () => {
    const [sendTrigger, { data }] = useLazyGetReportsByIdQuery();
    const trigger = async (id: string) => {
        sendTrigger(id);
    };

    return { trigger, data };
};