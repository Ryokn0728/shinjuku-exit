import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gates, exits } from '../data/stationData';

export function Home() {
  const [selectedGate, setSelectedGate] = useState('');
  const [selectedExit, setSelectedExit] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedGate && selectedExit) {
      navigate(`/route?from=${selectedGate}&to=${selectedExit}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SHINJUKU EXIT</h1>
          <p className="text-gray-600">新宿駅構内ナビゲーション</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              現在地（改札）
            </label>
            <select
              value={selectedGate}
              onChange={(e) => setSelectedGate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">改札を選択してください</option>
              {gates.map((gate) => (
                <option key={gate.id} value={gate.id}>
                  {gate.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              目的地（出口）
            </label>
            <select
              value={selectedExit}
              onChange={(e) => setSelectedExit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">出口を選択してください</option>
              {exits.map((exit) => (
                <option key={exit.id} value={exit.id}>
                  {exit.name} - {exit.description}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            disabled={!selectedGate || !selectedExit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            ルートを検索
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>新宿駅は複雑な構造をしています。</p>
          <p>このアプリで最短ルートを見つけましょう！</p>
        </div>
      </div>
    </div>
  );
}