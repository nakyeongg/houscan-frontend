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
            "SUIT-REGULAR",
            "1rem",
            "400",
            "140%",
            "-0.025em"
        ),
        SUITThin: fontGenerator("SUIT-THIN"),
        SUITLight: fontGenerator("SUIT-LIGHT"),
        SUITRegular: fontGenerator("SUIT-REGULAR"),
        SUITMedium: fontGenerator("SUIT-MEDIUM"),
        SUITSemiBold: fontGenerator("SUIT-SEMIBOLD"),
        SUITBold: fontGenerator("SUIT-BOLD"),
        SUITExtraBold: fontGenerator("SUIT-EXTRABOLD"),
        SUITBlack: fontGenerator("SUIT-HEAVY"),
    },
};