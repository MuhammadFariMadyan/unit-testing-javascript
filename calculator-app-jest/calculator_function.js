const tambah = (a, b) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat((parseFloat(a) + parseFloat(b)).toFixed(2));
    }parseFloat
    return parseInt(a) + parseInt(b);
}
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;

module.exports = {
    tambah, kurang, kali, bagi
}