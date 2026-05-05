(function () {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const revealItems = document.querySelectorAll(".reveal");
  const heroCounters = document.querySelectorAll(".stat-number[data-count]");
  const skillBars = document.querySelectorAll(".skill-bar");
  const pipelineStages = document.querySelectorAll(".pipeline-stage");
  const particleNetwork = document.getElementById("particle-network");
  let particleFrame = null;

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileMenu.classList.toggle("open", !open);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });

  window.addEventListener("load", function () {
    heroCounters.forEach(function (counter) {
      counter.textContent = counter.dataset.count || counter.textContent;
    });
  });

  const skillsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const bar = entry.target.querySelector("i");
        if (bar) bar.style.width = entry.target.dataset.value + "%";
        skillsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  skillBars.forEach(function (skill) {
    skillsObserver.observe(skill);
  });

  const pipelineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        pipelineStages.forEach(function (stage, index) {
          setTimeout(function () {
            stage.classList.add("active");
          }, index * 160);
        });
        pipelineObserver.disconnect();
      });
    },
    { threshold: 0.35 }
  );

  const pipelineTrack = document.getElementById("pipeline-track");
  if (pipelineTrack) pipelineObserver.observe(pipelineTrack);

  function buildParticleNetwork() {
    if (!particleNetwork) return;

    const nodeCount = window.innerWidth < 640 ? 18 : 28;
    const width = 1440;
    const height = 900;
    const nodes = [];
    particleNetwork.innerHTML = "";

    for (let index = 0; index < nodeCount; index += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() > 0.8 ? 3.8 : 2.8
      });
    }

    function draw() {
      particleNetwork.innerHTML = "";

      nodes.forEach(function (node) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > 190) continue;

          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", a.x.toFixed(2));
          line.setAttribute("y1", a.y.toFixed(2));
          line.setAttribute("x2", b.x.toFixed(2));
          line.setAttribute("y2", b.y.toFixed(2));
          line.setAttribute("stroke", distance < 120 ? "rgba(29,78,216,0.26)" : "rgba(255,255,255,0.10)");
          line.setAttribute("stroke-width", "1");
          particleNetwork.appendChild(line);
        }
      }

      nodes.forEach(function (node) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x.toFixed(2));
        circle.setAttribute("cy", node.y.toFixed(2));
        circle.setAttribute("r", node.r);
        circle.setAttribute("fill", node.r > 3 ? "rgba(245,158,11,0.75)" : "rgba(255,255,255,0.82)");
        particleNetwork.appendChild(circle);
      });

      particleFrame = requestAnimationFrame(draw);
    }

    draw();
  }

  buildParticleNetwork();
  window.addEventListener("resize", function () {
    if (particleFrame) cancelAnimationFrame(particleFrame);
    buildParticleNetwork();
  });
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
