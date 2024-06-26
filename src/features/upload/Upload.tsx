import { useEffect, useRef, useState } from 'react';
import cls from './Upload.module.scss';
import UploadIcon from '@assets/icons/upload.svg';
import { Button, customStyles, Input, Select, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, formatDuration, SizeEnum, useAppDispatch } from '@shared/lib';
import { toggleVideoProcessing } from '@features/events';
import { useSendVideo } from '@entities/video';
import { useGetObjects } from '@entities/object';

interface UploadProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const Upload: React.FC<UploadProps> = (props) => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>();
    const videoRef = useRef<HTMLVideoElement>();
    const [object, setObject] = useState<number>();
    const [duration, setDuration] = useState<number | null>(null);
    const dispatch = useAppDispatch();
    const { trigger } = useSendVideo();
    const [selectedObject, setSelectedObject] = useState(null);


    const options = useGetObjects();
    const handleSelectChange = (selectedOption) => {
        setSelectedObject(selectedOption.id);
    };


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        dispatch(toggleVideoProcessing(false));
        if (file && file.type.startsWith('video/')) {
            setVideoFile(file);
            const url = URL.createObjectURL(file);
            setDuration(null); // Сброс продолжительности при выборе нового файла
        } else {
            alert('Пожалуйста, выберите видеофайл.');
            setVideoFile(null);
            setDuration(null); // Сброс продолжительности при неудачной загрузке файла
        }
    };

    useEffect(() => {
        if (videoFile) {
            const videoEl = videoRef.current;
            if (videoEl) {
                videoEl.onloadedmetadata = () => {
                    setDuration(videoEl.duration);
                };
                videoEl.src = URL.createObjectURL(videoFile); // Создание нового URL для видеофайла
                videoEl.load(); // Обновление видео
            }
        }
    }, [videoFile]);

    const handlePlaceholderClick = () => {
        fileInputRef.current?.click();
    };

    const handleConfirmClick = async () => {
        if (videoFile && selectedObject) {
            const formData = new FormData();
            formData.append('video', videoFile);
            formData.append('building_id', selectedObject); // Ensure building_id is being set correctly
            console.log(formData.get('building_id')); // For debugging
            try {
                trigger(formData);
            } catch (error) {
                console.error('Ошибка загрузки видео:', error);
            }
        } else {
            alert('Пожалуйста, выберите объект и загрузите видео.');
        }
    };


    return (
        <div className={cls.wrapper}>
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className={cls.hiddenInput}
                {...props}
            />
            <div className={cls.placeholder} onClick={handlePlaceholderClick}>
                {videoFile ? (
                    <Text.Paragraph color={ColorEnum.TEXT}>{videoFile.name}</Text.Paragraph>
                ) : (
                    <>
                        <UploadIcon />
                        <Text.Paragraph color={ColorEnum.TEXT}>
                            Нажмите для загрузки видео
                        </Text.Paragraph>
                    </>
                )}
            </div>
            {videoFile && (
                <>
                    <div className={cls.videoWrapper}>
                        <video ref={videoRef} className={cls.videoPlayer} controls>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={cls.info}>
                        <Select
                            styles={customStyles}
                            options={options}
                            onChange={handleSelectChange}
                            placeholder="Выберите объект"
                        />
                        <ul className={cls.listInfo}>
                            <li className={cls.listItem}>
                                <Text.Paragraph color={ColorEnum.TEXT} size={SizeEnum.H1}>
                                    Размер видео: {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                                </Text.Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Text.Paragraph color={ColorEnum.TEXT} size={SizeEnum.H1}>
                                    Продолжительность: {formatDuration(duration)}
                                </Text.Paragraph>
                            </li>
                        </ul>
                        <div className={cls.listItem}>
                            <Button
                                size={SizeEnum.H3}
                                color={ColorEnum.WHITE}
                                border={BorderEnum.H5}
                                bgColor={ColorEnum.PRIMARY}
                                onClick={handleConfirmClick}
                            >
                                Обработать
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
