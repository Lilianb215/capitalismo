const robotMessages = [
    { sender: 'João', message: 'chegueei' },
    { sender: 'Maria', message: 'sem spam galera' },
    { sender: 'Pedro', message: 'que tema sensacional' },
    { sender: 'Ana', message: 'muito bomm' },
    { sender: 'Carlos', message: 'salve!!' },
    { sender: 'Joana', message: 'que difícil' },
    { sender: 'André', message: 'oii pessoal' },
    { sender: 'Laura', message: 'tema necessário' },
    { sender: 'Rafael', message: 'é impressão minha ou o chat tá com delay??' },
    { sender: 'Fernanda', message: 'Aumentei até o volume da TV' },
    { sender: 'Jão', message: 'opaa' },
    { sender: 'Mariah', message: 'moderadores, tem alguém spammando no chat D:' },
    { sender: 'Pedrin', message: 'que tema, meus amigos, que tema!!' },
    { sender: 'Nanda', message: 'que saborr' },
    { sender: 'Tati', message: 'salve fml o/' },
    { sender: 'Joana', message: 'tema atual demais' },
    { sender: 'André', message: 'será se esse tema cai na redação do enem??? 0-0' },
    { sender: 'Laura', message: 'é tão cotidiano que nem percebemos...' },
    { sender: 'Rafa', message: 'tava pensando nesse tema hoje...' },
    { sender: 'Gabs', message: 'opaa' },
  ];
  
  function displayRobotMessage(sender, message) {
    const chatContent = document.querySelector(".chat-content");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<span style="color: ${getRandomColor()}">${sender}:</span> ${message}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
  }
  
  function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#00FFFF', '#FFA500', '#800080'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function simulateChat() {
    let index = 0;
    const interval = setInterval(() => {
      const { sender, message } = robotMessages[index];
      displayRobotMessage(sender, message);
      index = (index + 1) % robotMessages.length;
    }, 5000);
  }
  
  simulateChat();
  