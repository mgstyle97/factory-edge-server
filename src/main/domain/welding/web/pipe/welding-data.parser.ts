import RegisterWeldingDataDto from '@main/domain/welding/web/dto/register-welding-data.dto';

export default (record: string): RegisterWeldingDataDto => {
  const weldingMetadata = record.split(',');
  return new RegisterWeldingDataDto(
    weldingMetadata[0],
    weldingMetadata[1],
    new Date(weldingMetadata[2]),
    Number(weldingMetadata[3]),
    Number(weldingMetadata[4]),
    Number(weldingMetadata[5]),
    Number(weldingMetadata[6]),
    Number(weldingMetadata[7]),
    Number(weldingMetadata[8]),
    weldingMetadata[9],
    weldingMetadata[10],
    weldingMetadata[11],
    weldingMetadata[12],
  );
};
