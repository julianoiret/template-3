/* COUNTER */

 const Counter = {
  settings: {
    speed: 1000
  },

  count: function(number_el, number) {
    const _this = this;
    console.log('Counter set')

    let speed = _this.settings.speed;
    if (number_el.hasAttribute("data-speed")) {
      speed = parseInt(number_el.getAttribute("data-speed"));
    }

    if (number_el && number > 0) {
      const step_min = 50;
      let step_speed = Math.abs(Math.floor(speed / number));
          step_speed = Math.max(step_speed, step_min);

        const start_time = new Date().getTime();
        const end_time = start_time + speed;
        let timer;

        const step = () => {
          const now = new Date().getTime();
          const left = Math.max((end_time - now) / speed, 0);
          const value = Math.round(number - (left * number));
          number_el.innerHTML = value;
          if (value == number)
            clearInterval(timer);
        };

        timer = setInterval(step, step_speed);
        step();
    }
  },

  init: function(el) {
    const _this = this;
    const number_el = el.getElementsByClassName("counter-number")[0];
    const number = parseInt(number_el.innerText);
    number_el.innerHTML = "0";
    _this.count(number_el, number);
  }
};

(function() {
  // Initiate all instances on the page
  const counters = document.getElementsByClassName("number");
  for (let i = 0; i < counters.length; i++) {
    Counter.init(counters[i]);
  }
})();
