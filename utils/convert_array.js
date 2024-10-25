

async function convert_toArray(data){
    let arr = []
    try {
        data.split(/\|\n|\|/).forEach(element => {
            const trimmedElements = element.split('\n').map(item => item.trim()).filter(item => item !== "");; // Trim each item after splitting by '\n'
            arr.push(trimmedElements);
        });
        return arr;
    } catch (error) {
        console.error(`Error occured converting to array: ${error}`)
        return arr;
    }
}

module.exports = convert_toArray