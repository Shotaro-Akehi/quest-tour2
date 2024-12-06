import React from 'react';
import routes from '../data/routes.json';

function RouteDecision({ attributes, onStart }) {
  const selectRoute = (attributes) => {
    if (routes && routes.length > 0) {
      return routes[0];
    } else {
      console.error('routes データが空または存在しません。');
      return { startPoint: 'デフォルト地点', quests: [] };
    }
  };

  const selectedRoute = selectRoute(attributes);

  return (
    <div className="route-decision pixel-font flex flex-col items-center">
      <h2>冒険の始まりじゃ！</h2>
      {selectedRoute.quests.length > 0 ? (
        <>
          <p className="text-center mb-4">スタート地点: {selectedRoute.startPoint}</p>
          <div className="map mb-4">
            <img src="/assets/images/map.png" alt="冒険の地図" className="rounded-lg" />
          </div>
          <button onClick={() => onStart(selectedRoute.quests[0])} className="animate-pulse">
            冒険を始める
          </button>
        </>
      ) : (
        <p className="text-center">利用可能なルートがありません。</p>
      )}
    </div>
  );
}

export default RouteDecision;
