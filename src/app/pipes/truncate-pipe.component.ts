import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe {
  transform(value: any, args: any) : any {
    let limit = args ? parseInt(args, 10) : 10;

    return value.length > limit ? value.substring(0, limit): value;
  }
}