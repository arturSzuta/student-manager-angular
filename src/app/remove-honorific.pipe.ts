import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHonorific',
})
export class RemoveHonorificPipe implements PipeTransform {
  transform(value: string): string {
    new Array<string>('Mr.', 'Mrs.', 'Ms.').forEach((element) => {
      if (value.includes(element)) {
        console.log(value + ' contains ' + element);
        value = value.split(element).pop()!;
      }
    });
    return value;
  }
}
