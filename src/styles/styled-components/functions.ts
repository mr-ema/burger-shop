type Operation = 'div' | 'mul' | 'res' | 'sum';

export function fontReSize(size: string, operation: Operation, number: number): string {
  let calc: string = '';
  // Get unit measurement, replace all number by empty string
  const units = size.replace(/[0-9.]/gi, '');

  switch(operation) {
    case 'div':
      calc = (parseFloat(size) / number).toFixed(1);
      break;
    case 'mul':
      calc = (parseFloat(size) * number).toFixed(1);
      break;
    case 'res':
      let res = (parseFloat(size) - number).toFixed(1);
      calc = parseFloat(res) > 0 ? res : '1';
      break;
    case 'sum':
      calc = (parseFloat(size) + number).toFixed(1);
      break;
    default: 
      throw new Error('Invalid Operation, Valid Operations Are ("sum", "res", "mul", "div") ')
  }
  
  return calc + units;
}