import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { gates, exits, findRoute } from '../data/stationData';
import { StationMap } from '../components/StationMap';

export function Route() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const fromGateId = searchParams.get('from') || '';
  const toExitId = searchParams.get('to') || '';

  const gate = gates.find(g => g.id === fromGateId);
  const exit = exits.find(e => e.id === toExitId);
  const route = findRoute(fromGateId, toExitId);

  if (!gate || !exit) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">エラー</h1>
          <p className="text-gray-600 mb-4">ルート情報が見つかりません</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← 戻る
          </button>
          <h1 className="text-xl font-bold">SHINJUKU EXIT</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">出発地</p>
              <p className="text-lg font-bold">{gate.name}</p>
            </div>
            <div className="text-center px-4">
              <p className="text-gray-400">→</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">目的地</p>
              <p className="text-lg font-bold">{exit.name}</p>
            </div>
          </div>

          {route && (
            <div className="border-t pt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">推定時間</span>
                <span className="font-medium">{route.time}分</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">距離</span>
                <span className="font-medium">{route.distance}m</span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">構内マップ</h2>
          <StationMap 
            gates={gates}
            exits={exits}
            route={route}
            selectedGate={fromGateId}
            selectedExit={toExitId}
          />
        </div>

        <Link
          to={`/exit/${toExitId}`}
          className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-lg font-bold mb-2">出口情報を見る</h3>
          <p className="text-gray-600">
            {exit.name}の詳細情報や周辺施設を確認
          </p>
        </Link>
      </div>
    </div>
  );
}