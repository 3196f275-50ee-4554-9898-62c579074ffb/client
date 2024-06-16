export const transformData = (data) => {
    const result = data.reduce((acc, curr) => {
        const { count, type } = curr;
        if (!acc[type]) {
            acc[type] = { count: 0, type: type, color: '' };
        }
        acc[type].count += count;

        // Assign color based on type
        switch (type) {
            case 'Success':
                acc[type].color = 'var(--success)';
                break;
            case 'Warning':
                acc[type].color = 'var(--warning)';
                break;
            case 'Danger':
                acc[type].color = 'var(--danger)';
                break;
            default:
                acc[type].color = 'var(--default-color)';
                break;
        }

        return acc;
    }, {});

    return Object.values(result);
};
