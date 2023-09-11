import React from 'react';

function Repo() {
  const openExternalLink = () => {
    // URL зовнішнього сайту, на який ви хочете перейти
    const externalUrl = 'https://github.com/AlexBadger56/Front_Lessons/tree/main/Lesson-40-React';

    // Відкриття посилання у новому вікні або вкладці браузера
    window.open(externalUrl, '_blank');
  };

  return (
    <>     
      <button className="btn repo" onClick={openExternalLink}>My repositiry</button>
    </>
  );
}

export default Repo;