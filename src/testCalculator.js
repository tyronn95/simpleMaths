import { Calculatrice } from "./index";
export const getResultAdd = () => {
    let addition = Calculatrice(5,'+',5)
    let additionTest = 5+5
    return addition==additionTest
};
export const getResultSub = () => {
    let soustraction = Calculatrice(5,'-',5)
    let soustractionTest = 5-5
    return soustraction==soustractionTest
};
export const getResultMult = () => {
    let multiplication = Calculatrice(5,'*',5)
    let multiplicationTest = 5*5
    return multiplication==multiplicationTest
};
export const getResultDiv = () => {
    let division = Calculatrice(5,'/',5)
    let divisionTest = 5/5
    return division==divisionTest
};