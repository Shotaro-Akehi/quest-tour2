import React, { useState } from 'react';
import destination1 from '../assets/images/destination1.jpg';
import destination2 from '../assets/images/destination2.webp';
import destination3 from '../assets/images/destination3.webp';

const images = {
  destination1,
  destination2,
  destination3,
};

function Quest({ quest, onComplete }) {
  const [showHint, setShowHint] = useState(false);

  const questImage = images[quest.imageUrl];

  return (
    <div className="quest pixel-font flex flex-col items-center">
      <h2>{quest.mission.split(':')[0]}</h2>
      <p className="text-center mb-4">{quest.mission.split(':')[1]}</p>
      <img src={questImage} alt="目的地の画像" className="quest-image mb-4" />
      <button onClick={() => setShowHint(!showHint)} className="mb-4">
        {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
      </button>
      {showHint && (
        <div className="hint w-full max-w-md">
          <p className="text-center mb-2">{quest.hint}</p>
        </div>
      )}
      <div className="map mt-4 mb-4">
        <img src="/assets/images/progress-map.png" alt="進捗地図" className="rounded-lg" />
      </div>
      <button onClick={onComplete} className="animate-bounce">次のクエストへ</button>
    </div>
  );
}

export default Quest;
