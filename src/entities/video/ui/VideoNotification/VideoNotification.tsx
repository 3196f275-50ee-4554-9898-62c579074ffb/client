import cls from './VideoNotification.module.scss';
import { IVideoEnum, IVideoNotificationProps } from '@entities/video';
import Icon from '@assets/icons/warning.svg';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Text } from '@shared/ui';

export const VideoNotification = (
    {
        header,
        body,
    }: IVideoNotificationProps,
) => {
    return (
        <div className={classNames(cls.wrapper, {
            [cls.warning]: header === IVideoEnum.WARNING,
            [cls.danger]: header === IVideoEnum.DANGER,
        }, [])}>
            <Icon />
            <div className={cls.list}>
                <Text.Paragraph
                    size={SizeEnum.H3}
                    weight={WeightEnum.BOLD}
                    color={header === IVideoEnum.DANGER ? ColorEnum.DANGER : ColorEnum.WARNING}
                >
                    {header}
                </Text.Paragraph>
                <Text.Paragraph
                    size={SizeEnum.H4}
                    color={header === IVideoEnum.DANGER ? ColorEnum.DANGER : ColorEnum.WARNING}
                >
                    {body}
                </Text.Paragraph>
            </div>
        </div>
    );
};

