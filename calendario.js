document.addEventListener("DOMContentLoaded", function() {
  var calendarDiv = document.getElementById("calendar");
  
  // Array de eventos de transmissão
  var events = [
    { date: "2024-04-15", eventName: "GP da Fórmula 1" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    { date: "2024-04-20", eventName: "Jogo do Brasileirão" },
    // Adicione mais eventos conforme necessário
  ];

  // Função para exibir os eventos no calendário
  function renderCalendarEvents() {
    var calendarHTML = "";
    events.forEach(function(event) {
      calendarHTML += '<div class="event"><div class="event-date">' + event.date + '</div><div class="event-name">' + event.eventName + '</div></div>';
    });
    calendarDiv.innerHTML = calendarHTML;
  }

  renderCalendarEvents();
});
