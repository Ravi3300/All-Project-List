import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textConverter'
})
export class TextConverterPipe implements PipeTransform {

  transform(value: any, exceration:any = 1): any {
    return value.toUpperCase() + '!'.repeat(exceration)
  }

}
