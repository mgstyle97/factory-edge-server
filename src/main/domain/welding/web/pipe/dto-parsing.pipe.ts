import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import WeldingDataParser from '@main/domain/welding/web/pipe/welding-data.parser';

export default class DtoParsingPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): any {
    return WeldingDataParser(value);
  }
}
