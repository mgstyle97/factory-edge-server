import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import DtoParsingPipe from '@main/domain/welding/web/pipe/dto-parsing.pipe';
import RegisterWeldingDataDto from '@main/domain/welding/web/dto/register-welding-data.dto';
import { WeldingDataService } from '@main/domain/welding/application/welding-data.service';

@Controller()
export class WeldingDataController {
  constructor(private readonly weldingDataService: WeldingDataService) {}

  @MessagePattern('thesis/data')
  async handleWeldingData(
    @Payload(DtoParsingPipe) weldingData: RegisterWeldingDataDto,
  ): Promise<void> {
    await this.weldingDataService.handleWeldingData(weldingData);
  }
}
