import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Globe, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotebooks } from '@/hooks/useNotebooks';
const EmptyDashboard = () => {
  const navigate = useNavigate();
  const {
    createNotebook,
    isCreating
  } = useNotebooks();
  const handleCreateNotebook = () => {
    console.log('Create notebook button clicked');
    console.log('isCreating:', isCreating);
    createNotebook({
      title: 'Unbenannte Arbeitsmappe',
      description: ''
    }, {
      onSuccess: data => {
        console.log('Navigating to notebook:', data.id);
        navigate(`/notebook/${data.id}`);
      },
      onError: error => {
        console.error('Failed to create notebook:', error);
      }
    });
  };
  return <div className="text-center py-16 flex flex-col items-center">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-medium text-gray-900 mb-4">Erstelle deine erste Arbeitsmappe</h2>
        <p className="text-lg text-gray-600 mx-auto">MetagonLM ist ein KI-gestützter Forschungs- und Schreibassistent, der am besten mit den Quellen funktioniert, die du hochlädst</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">PDFs</h3>
          <p className="text-gray-600">Lade Forschungsarbeiten, Berichte und Dokumente hoch</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Websites</h3>
          <p className="text-gray-600">Füge Webseiten und Online-Artikel als Quellen hinzu</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Video className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Audio</h3>
          <p className="text-gray-600">Füge Multimedia-Inhalte in deine Forschung ein</p>
        </div>
      </div>

      <Button onClick={handleCreateNotebook} size="lg" className="bg-[#8f0c41] hover:bg-[#b81a5a] text-white" disabled={isCreating}>
        <Upload className="h-5 w-5 mr-2" />
        {isCreating ? 'Wird erstellt...' : 'Arbeitsmappe erstellen'}
      </Button>
    </div>;
};
export default EmptyDashboard;