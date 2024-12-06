import React, { useState } from 'react';
import destination1 from '../assets/images/destination1.jpg';
import destination2 from '../assets/images/destination2.webp';
import destination3 from '../assets/images/destination3.webp';

const images = {
  destination1,
  destination2,
  destination3,
};

function QuestClear({ quest, onNext }) {
  const [showInfo, setShowInfo] = useState(false);

  const questImage = images[quest.imageUrl];

  return (
    <div className="quest-clear pixel-font flex flex-col items-center">
      <h2>目的地に到着したぞ！</h2>
      <img src={questImage} alt="目的地の画像" className="quest-image mb-4" />
      <button onClick={() => setShowInfo(!showInfo)} className="mb-4">
        {showInfo ? '情報を隠す' : 'この場所を見る'}
      </button>
      {showInfo && <p className="text-center mb-4 w-full max-w-md">{quest.information}</p>}
      <button onClick={() => onNext(quest.nextQuest)} className="animate-pulse">
        {quest.nextQuest !== null ? '次のクエストへ' : '冒険を終了する'}
      </button>
    </div>
  );
}

export default QuestClear;
