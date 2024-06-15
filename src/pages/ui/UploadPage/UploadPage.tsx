import cls from './UploadPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, useAppSelector, WeightEnum } from '@shared/lib';
import { selectVideoProcessing } from '@features/events';
import { Upload } from '@features/upload';

export const UploadPage = () => {
    const videoProcessing = useAppSelector(selectVideoProcessing);
    return (
        <div className={cls.wrapper}>
            <div className={cls.video}>
                <Text.Heading
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H4}
                    weight={WeightEnum.MEDIUM}
                >
                    Загрузка видео
                </Text.Heading>
                <Upload />
            </div>
            {videoProcessing
                &&
                <div className={cls.events}>
                    <Text.Heading
                        color={ColorEnum.TEXT}
                        size={SizeEnum.H4}
                        weight={WeightEnum.MEDIUM}
                    >
                        Нарушения
                    </Text.Heading>
                </div>
            }
        </div>
    );
};



