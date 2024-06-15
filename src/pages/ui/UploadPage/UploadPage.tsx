import cls from './UploadPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, useAppSelector, WeightEnum } from '@shared/lib';
import { selectVideoProcessing } from '@features/events';
import { Upload } from '@features/upload';
import { selectVideo, VideoNotification } from '@entities/video';

export const UploadPage = () => {
    const videoProcessing = useAppSelector(selectVideoProcessing);
    const video = useAppSelector(selectVideo);
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
                    <ul className={cls.list}>
                        {video && video.map(item => (
                            <li className={cls.lisstItem}
                                key={item.index}>
                                <VideoNotification
                                    header={item.header}
                                    body={item.body}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};



