import { useParams, useNavigate } from 'react-router-dom';
import { exits } from '../data/stationData';

export function ExitDetail() {
  const { exitId } = useParams();
  const navigate = useNavigate();
  const exit = exits.find(e => e.id === exitId);

  if (!exit) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">エラー</h1>
          <p className="text-gray-600 mb-4">出口情報が見つかりません</p>
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
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800"
          >
            ← 戻る
          </button>
          <h1 className="text-xl font-bold">出口情報</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{exit.name}出口</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">基本情報</h3>
              <p className="text-gray-600">{exit.description}</p>
              <p className="text-sm text-gray-500 mt-1">階層: {exit.floor === 0 ? '地上階' : `地下${Math.abs(exit.floor)}階`}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">周辺施設・目印</h3>
              <ul className="space-y-2">
                {exit.nearbyLandmarks.map((landmark, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">利用のヒント</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>エレベーター・エスカレーターの有無は現地でご確認ください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>混雑時は他の出口の利用もご検討ください</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          別のルートを検索
        </button>
      </div>
    </div>
  );
}