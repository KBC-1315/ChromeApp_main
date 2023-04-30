const quotes = [
    {
      quote: "시간이 나서 운동하는 게 아니라 시간을 내서 운동해야 한다",
      author: "",
    },
    {
      quote: "'한계'라고 느낄 때 '한 개'를 더 해야 성장한다",
      author: "",
    },
    {
      quote:
        "지금 내가 들고 있는 무게는 부모님의 삶의 무게에 비하면 아무 것도 아니다",
      author: "",
    },
    {
      quote: "건강해지려면 운동해야 하고 운동하려면 건강해야 한다",
      author: "",
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;