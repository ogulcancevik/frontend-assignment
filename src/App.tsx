import { useState } from 'react';
import Navigation from './components/Navigation';
import ScannerSection from './components/ScannerSection';
import SignSection from './components/SignSection';
import MainLayout from './components/layouts/MainLayout';
import BatchSection from './components/BatchSection';
import FilterSection from './components/FiltersSection';
import ExportSection from './components/ExportSection';

export const App = () => {
  const [selectedSection, setSelectedSection] = useState<string>('');
  const renderSection = () => {
    switch (selectedSection) {
      case '':
        return <ScannerSection />;
      case 'sign':
        return <SignSection />;
      case 'batch':
        return <BatchSection />;
      case 'filter':
        return <FilterSection />;
      case 'export':
        return <ExportSection />;
      default:
        return null;
    }
  };
  return (
    <MainLayout>
      {renderSection()}
      <Navigation
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
    </MainLayout>
  );
};
