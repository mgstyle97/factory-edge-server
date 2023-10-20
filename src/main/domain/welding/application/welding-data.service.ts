import { Injectable } from '@nestjs/common';
import RegisterWeldingDataDto from '@main/domain/welding/web/dto/register-welding-data.dto';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WeldingDataService {
  private readonly batchSize: number;
  private dataList: Array<RegisterWeldingDataDto> =
    new Array<RegisterWeldingDataDto>();
  private requestSequence: number = 90001;
  constructor(
    readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.batchSize = configService.get<number>('CLIENT_NUM');
  }
  async handleWeldingData(weldingData: RegisterWeldingDataDto) {
    this.dataList.push(weldingData);
    if (this.dataList.length == this.batchSize) {
      const body = this.dataList;
      this.dataList = [];

      await this.httpService.axiosRef.post('/sensing/batch', body, {
        headers: {
          'Global-Request-Sequence': this.requestSequence++,
        },
      });
    }
  }
}
