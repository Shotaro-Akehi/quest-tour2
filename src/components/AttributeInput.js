import React, { useState } from 'react';

function AttributeInput({ onSubmit }) {
  const [attributes, setAttributes] = useState({
    gender: '',
    nationality: '',
    age: '',
    travelPreference: '',
    budget: ''
  });

  const handleChange = (e) => {
    setAttributes({ ...attributes, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(attributes);
  };

  return (
    <div className="attribute-input pixel-font">
      <h2>冒険者よ、自分の情報を選択せよ</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <select name="gender" onChange={handleChange} required>
          <option value="">性別を選択</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
        <select name="nationality" onChange={handleChange} required>
          <option value="">国籍を選択</option>
          <option value="jp">日本</option>
          <option value="us">アメリカ</option>
          <option value="fr">フランス</option>
          <option value="other">その他</option>
        </select>
        <select name="age" onChange={handleChange} required>
          <option value="">年齢を選択</option>
          <option value="10-20">10代〜20代</option>
          <option value="30-40">30代〜40代</option>
          <option value="50+">50歳以上</option>
        </select>
        <select name="travelPreference" onChange={handleChange} required>
          <option value="">旅の好みを選択</option>
          <option value="nature">自然</option>
          <option value="culture">文化</option>
          <option value="food">食事</option>
          <option value="adventure">冒険</option>
        </select>
        <select name="budget" onChange={handleChange} required>
          <option value="">予算を選択</option>
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
        <button type="submit" className="mt-4">冒険を始める</button>
      </form>
    </div>
  );
}

export default AttributeInput;
