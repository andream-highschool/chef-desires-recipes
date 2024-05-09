/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */


/*

Esempio di utilizzo:
    object = {
        name: 'John',
        age: 30,
        email: 'john@example.com'
    };

    keys = ['name','email','password']

    output = {
        name: 'John',
        email: 'john@example.com'
    }

Da qui si capisce il nome "pick", cioè "prendi solo quello che voglio".
*/

const pick = (object, keys) => {
    return keys.reduce((obj, key) => {  
        if (object && Object.prototype.hasOwnProperty.call(object, key)) // "Object.prototype.hasOwnProperty" serve per capire se un oggetto 
                                                                         // qualsiasi ha una certa proprietà. 
                                                                         // La funzione "call" è una funzione di javascript chiamabile da qualsiasi
                                                                         // variabile di tipo funzione (quelle gialle su vs code) che permette di
                                                                         // definire a mano il contesto dell'operazione.
                                                                         // Il contesto sarebbe essenzialmente il "this", cioè è come dire 
                                                                         // manualmente a quale istanza deve riferirsi.    
                                                                         // In breve, controlliamo se "object" ha una proprietà chiamata come il valore 
                                                                         // della variabile "key"
                                                                         // Usare "call" è meglio perché se facessimo object.hasOwnProprerty se la
                                                                         // variabile "object" fosse null non avrebbe nessuna funzione quindi crasherebbe.
        {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key]; 
        }
        return obj;

        
    }, {});
};

module.exports = pick;