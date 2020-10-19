import { math } from 'polished';

const defaultOptions = {
    fontSize: '16px',
    contentSpacingFactor: 2,
    headerMarginTopFactor: [4, 6, 4, 3, 3, 2],
    considerFontSizeChange: true,
    headerFontModularScale: 1.125,
};

const generateModularScale = fontScale => {
    return Array.from({ length: 6 }, (_, idx) => +Math.pow(fontScale, idx).toFixed(3)).reverse();
};

export default (options = {}) => {
    const { fontSize, contentSpacingFactor, headerMarginTopFactor, headerFontModularScale,
        considerFontSizeChange } = { ...defaultOptions, ...options };

    const baseLine = '0.5rem';
    const headerModularScale = generateModularScale(headerFontModularScale);
    const baseLineSpacing = (factor = 1) => math(`${factor} * ${baseLine}`);
    const contentSpacing = (factor = 1) => math(`${factor} * ${baseLine} * ${contentSpacingFactor}`);

    const headers = headerModularScale.map((fontScale, headerLevel) => {
        const _marginTopFactor = Array.isArray(headerMarginTopFactor)
            ? headerMarginTopFactor[headerLevel]
            : headerMarginTopFactor;
        
        return {
            fontSize: `${fontScale}rem`,
            lineHeight: baseLineSpacing(Math.ceil(fontScale * 2)),
            marginTop: baseLineSpacing(_marginTopFactor),
            marginBottom: contentSpacing(),
        };
    });

    const html = {
        lineHeight: 1.5,
        fontSize: considerFontSizeChange 
            ? `max(${fontSize}, 100%)`
            : fontSize,
    };

    const content = {
        fontSize: '1rem',
        marginBottom: contentSpacing(),
    };

    return { html, headers, content, baseLineSpacing, contentSpacing};
};
