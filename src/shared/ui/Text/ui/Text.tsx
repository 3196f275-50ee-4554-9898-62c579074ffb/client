import { Heading, IHeadingProps, ILinkProps, IParagraphProps, Link, Paragraph } from '@shared/ui/Text';

// Text.tsx
export const Text = {
    Paragraph: ({ color, fontFamily, weight, size, className, children, ...props }: IParagraphProps) => (
        <Paragraph
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
            {...props}
        >
            {children}
        </Paragraph>
    ),
    Heading: ({ color, fontFamily, weight, size, className, children, ...props }: IHeadingProps) => (
        <Heading
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
            {...props}

        >
            {children}
        </Heading>
    ),
    Link: ({ color, to, fontFamily, weight, size, className, children, ...props }: ILinkProps) => (
        <Link
            to={to}
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
            {...props}

        >
            {children}
        </Link>
    ),
};
