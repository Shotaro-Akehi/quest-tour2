import React, { useState } from 'react';
import AttributeInput from './components/AttributeInput';
import RouteDecision from './components/RouteDecision';
import Quest from './components/Quest';
import QuestClear from './components/QuestClear';
import routes from './data/routes.json';
import './App.css';
import './global.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('attributeInput');
  const [userAttributes, setUserAttributes] = useState(null);
  const [currentQuest, setCurrentQuest] = useState(null);

  const handleAttributeSubmit = (attributes) => {
    setUserAttributes(attributes);
    setCurrentScreen('routeDecision');
  };

  const handleRouteStart = (quest) => {
    setCurrentQuest(quest);
    setCurrentScreen('quest');
  };

  const handleQuestComplete = () => {
    setCurrentScreen('questClear');
  };

  const handleNextQuest = (nextQuestIndex) => {
    if (nextQuestIndex !== null) {
      const nextQuest = routes[0].quests[nextQuestIndex];
      setCurrentQuest(nextQuest);
      setCurrentScreen('quest');
    } else {
      setCurrentScreen('attributeInput'); // 全てのクエスト終了
    }
  };

  return (
    <div className="app">
      {currentScreen === 'attributeInput' && (
        <AttributeInput onSubmit={handleAttributeSubmit} />
      )}
      {currentScreen === 'routeDecision' && (
        <RouteDecision attributes={userAttributes} onStart={handleRouteStart} />
      )}
      {currentScreen === 'quest' && (
        <Quest quest={currentQuest} onComplete={handleQuestComplete} />
      )}
      {currentScreen === 'questClear' && (
        <QuestClear quest={currentQuest} onNext={handleNextQuest} />
      )}
    </div>
  );
}

export default App;
