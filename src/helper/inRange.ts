export const inRange = (actualCoord: number , clickCoord: number) => {
    return (
        actualCoord === clickCoord ||
        actualCoord + 1 === clickCoord ||
        actualCoord  + 2 === clickCoord ||
        actualCoord - 1 === clickCoord ||
        actualCoord - 2 === clickCoord 
    );
};


export default inRange;
