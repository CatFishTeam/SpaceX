import { Pipe, PipeTransform } from '@angular/core';
/*
 * Met la première lettre en majuscule
 * Usage:
 *   value | capitalize
 * Example:
 *   {{ salut | capitalize }}
 *   formats to: Salut
*/
@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
  }
}
