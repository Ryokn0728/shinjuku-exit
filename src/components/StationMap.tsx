import type { Gate, Exit, Route } from '../data/stationData';
import { walls, corridors } from '../data/stationData';

interface StationMapProps {
  gates: Gate[];
  exits: Exit[];
  route: Route | null;
  selectedGate: string;
  selectedExit: string;
}

export function StationMap({ gates, exits, route, selectedGate, selectedExit }: StationMapProps) {
  const padding = 50;

  // スマホ対応のビューポート計算
  const viewBox = `${150 - padding} ${200 - padding} ${600 + padding * 2} ${550 + padding * 2}`;

  const getRoutePathString = () => {
    if (!route || route.path.length === 0) return '';
    
    return route.path.reduce((pathString, point, index) => {
      return pathString + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
    }, '');
  };

  return (
    <div className="w-full overflow-hidden bg-gray-100 rounded-lg shadow-inner">
      <svg 
        viewBox={viewBox}
        className="w-full h-auto"
        style={{ maxHeight: '70vh' }}
      >
        {/* 背景グリッド */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5"/>
        </pattern>
        <rect x="100" y="150" width="700" height="650" fill="url(#grid)" />

        {/* 通路を先に描画 */}
        {corridors.map((corridor, index) => (
          <g key={`corridor-${index}`}>
            <rect
              x={corridor.x}
              y={corridor.y}
              width={corridor.width}
              height={corridor.height}
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            {corridor.name && (
              <text
                x={corridor.x + corridor.width / 2}
                y={corridor.y + corridor.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-gray-400"
                fontSize="9"
              >
                {corridor.name}
              </text>
            )}
          </g>
        ))}

        {/* 壁 */}
        {walls.map((wall, index) => (
          <rect
            key={`wall-${index}`}
            x={wall.x}
            y={wall.y}
            width={wall.width}
            height={wall.height}
            fill="#374151"
          />
        ))}

        {/* ルートを通路の上に描画 */}
        {route && (
          <g>
            {/* ルートの影 */}
            <path
              d={getRoutePathString()}
              fill="none"
              stroke="#000000"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.2"
              transform="translate(3, 3)"
            />
            {/* メインルート */}
            <path
              d={getRoutePathString()}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* ルートの中央線 */}
            <path
              d={getRoutePathString()}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="8,8"
              className="animate-pulse"
            />
          </g>
        )}

        {/* 改札（スタート地点） */}
        {gates.map((gate) => {
          const isSelected = gate.id === selectedGate;
          return (
            <g key={gate.id}>
              {isSelected && (
                <>
                  {/* スタートピンの影 */}
                  <circle
                    cx={gate.x + 3}
                    cy={gate.y + 3}
                    r="20"
                    fill="#000000"
                    opacity="0.3"
                  />
                  {/* スタートピン */}
                  <circle
                    cx={gate.x}
                    cy={gate.y}
                    r="20"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x={gate.x}
                    y={gate.y + 3}
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                    fontSize="11"
                  >
                    START
                  </text>
                  {/* スタート地点のラベル */}
                  <rect
                    x={gate.x - 40}
                    y={gate.y - 45}
                    width="80"
                    height="18"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="2"
                    rx="9"
                  />
                  <text
                    x={gate.x}
                    y={gate.y - 32}
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                    fontSize="10"
                  >
                    {gate.name}
                  </text>
                </>
              )}
              {!isSelected && (
                <>
                  <circle
                    cx={gate.x}
                    cy={gate.y}
                    r="8"
                    fill="#10b981"
                    opacity="0.7"
                  />
                  <text
                    x={gate.x}
                    y={gate.y - 15}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="9"
                  >
                    {gate.name}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* 出口（ゴール地点） */}
        {exits.map((exit) => {
          const isSelected = exit.id === selectedExit;
          return (
            <g key={exit.id}>
              {isSelected && (
                <>
                  {/* ゴールピンの影 */}
                  <g transform={`translate(${exit.x + 3}, ${exit.y + 3})`}>
                    <path
                      d="M 0 -25 L -12 -8 L -6 -8 L -6 8 L 6 8 L 6 -8 L 12 -8 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                  {/* ゴールピン */}
                  <g transform={`translate(${exit.x}, ${exit.y})`}>
                    <path
                      d="M 0 -25 L -12 -8 L -6 -8 L -6 8 L 6 8 L 6 -8 L 12 -8 Z"
                      fill="#ef4444"
                      stroke="#ffffff"
                      strokeWidth="3"
                    />
                    <text
                      y="-13"
                      textAnchor="middle"
                      className="text-xs font-bold fill-white"
                      fontSize="10"
                    >
                      GOAL
                    </text>
                  </g>
                  {/* ゴール地点のラベル */}
                  <rect
                    x={exit.x - 30}
                    y={exit.y + 15}
                    width="60"
                    height="18"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="2"
                    rx="9"
                  />
                  <text
                    x={exit.x}
                    y={exit.y + 28}
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                    fontSize="11"
                  >
                    {exit.name}
                  </text>
                </>
              )}
              {!isSelected && (
                <>
                  <rect
                    x={exit.x - 6}
                    y={exit.y - 6}
                    width="12"
                    height="12"
                    fill="#f59e0b"
                    opacity="0.7"
                    rx="2"
                  />
                  <text
                    x={exit.x}
                    y={exit.y + 18}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="9"
                  >
                    {exit.name}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* 凡例 */}
        <g transform="translate(170, 230)">
          <rect x="0" y="0" width="100" height="70" fill="white" fillOpacity="0.95" stroke="#e5e7eb" strokeWidth="2" rx="5"/>
          <text x="8" y="15" className="text-xs font-bold fill-gray-700" fontSize="10">凡例</text>
          
          <circle cx="15" cy="28" r="5" fill="#10b981"/>
          <text x="25" y="31" className="text-xs fill-gray-600" fontSize="9">改札</text>
          
          <rect x="10" y="37" width="10" height="10" fill="#f59e0b" rx="2"/>
          <text x="25" y="44" className="text-xs fill-gray-600" fontSize="9">出口</text>
          
          <line x1="8" y1="55" x2="20" y2="55" stroke="#3b82f6" strokeWidth="3"/>
          <text x="25" y="58" className="text-xs fill-gray-600" fontSize="9">ルート</text>
        </g>

        {/* 方角コンパス */}
        <g transform="translate(680, 240)">
          <circle cx="0" cy="0" r="25" fill="white" fillOpacity="0.95" stroke="#e5e7eb" strokeWidth="2"/>
          <text x="0" y="-15" textAnchor="middle" className="text-xs font-bold fill-gray-700" fontSize="11">N</text>
          <text x="0" y="20" textAnchor="middle" className="text-xs fill-gray-600" fontSize="8">北</text>
          <path d="M 0 -12 L -4 -4 L 0 -8 L 4 -4 Z" fill="#374151"/>
        </g>

        {/* 注意書き */}
        {route && (
          <g transform="translate(170, 660)">
            <rect x="0" y="0" width="300" height="30" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" rx="5"/>
            <text x="10" y="15" className="text-xs fill-blue-700" fontSize="10">青いラインに沿って歩いてください</text>
            <text x="10" y="25" className="text-xs fill-blue-600" fontSize="9">推定時間: {route.time}分 / 距離: {route.distance}m</text>
          </g>
        )}
      </svg>
    </div>
  );
}