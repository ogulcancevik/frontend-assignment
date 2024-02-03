import ExportSvg from './icons/export.svg?react';
import CertSvg from './icons/cert.svg?react';
import DocSvg from './icons/doc.svg?react';
import FilterSvg from './icons/filter.svg?react';
import ScanSvg from './icons/scan.svg?react';
export default [
  {
    name: 'Document Scanner',
    key: '',
    icon: () => <DocSvg />,
  },
  {
    name: 'Sign & Stamp',
    key: 'sign',
    icon: () => <CertSvg />,
  },
  {
    name: 'Batch Scanning',
    key: 'batch',
    icon: () => <ScanSvg />,
  },
  {
    name: 'Advanced Filters',
    key: 'filter',
    icon: () => <FilterSvg />,
  },
  {
    name: 'Export & Share',
    key: 'export',
    icon: () => <ExportSvg />,
  },
];
