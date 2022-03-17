
/**
 * Used to format data
 */
class formatter{

    static formatPopulationNumber(population){
        var length = population.toLocaleString().length ;
        var k = (length / 3);
        
        let origString = population.toLocaleString();

        origString = origString.split('')
        var res =population.toLocaleString();
        for( var i = length % 3; i< 4*k; i = i + 4){
            origString.splice(i, 0, " ");
        }

        res = origString.join('');
        
        return res;
    }

}

export default formatter;