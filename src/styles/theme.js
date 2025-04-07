const fontGenerator = (
    fontFamily,
    fontSize = "1rem",
    fontWeight = "400",
    lineHeight = "140%",
    letterSpacing = "-2.5%"
) => ({
    "font-family": fontFamily,
    "font-size": fontSize,
    "font-weight": fontWeight,
    "line-height": lineHeight,
    "letter-spacing": letterSpacing,
});

export const theme = {
    colors: {
        mainColor: "#007BFF",
    },
    
    fonts: {
        default: fontGenerator(
            "Pretendard-Regular",
            "1rem",
            "400",
            "140%",
            "-0.025em"
        ),
        PretendardThin: fontGenerator("Pretendard-Thin"),
        PretendardLight: fontGenerator("Pretendard-Light"),
        PretendardRegular: fontGenerator("Pretendard-Regular"),
        PretendardMedium: fontGenerator("Pretendard-Medium"),
        PretendardSemiBold: fontGenerator("Pretendard-SemiBold"),
        PretendardBold: fontGenerator("Pretendard-Bold"),
        PretendardExtraBold: fontGenerator("Pretendard-ExtraBold"),
        PretendardBlack: fontGenerator("Pretendard-Black"),
    },
};